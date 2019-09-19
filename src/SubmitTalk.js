import React from 'react'
import { Card, Flex, Box, Text, Button as UnstiledButton} from 'rebass'
import Fade from 'react-reveal/Fade'
import styled from 'styled-components'
import FileUploader from './components/FileUploader'
import PhotoUploader from './components/PhotoUploader'
import createAirtableRecord from './services/createAirtableRecord'
import clearCloudinary from './services/clearCloudinary'

let Input = styled.input`
    font-family: inherit;
    font-size: 16px;
    padding: 4px 6px ;
    outline: none;
    margin: 8px 0;
    border: 2px solid ${props => props.theme.colors.greyLight}
    border-radius: 4px;
    width: 95%;
   
    @media screen and (min-width:  ${props => props.theme.breakpoints[1]}) {
        width: 90%; 
    }
`
let Button = styled(UnstiledButton)`
    &:hover {
        color: ${props => props.theme.colors.greyLight2};
        border-color: ${props => props.theme.colors.greyLight};
    }
    &:disabled {
        cursor: not-allowed;
        color: ${props => props.theme.colors.greyLight2};
        border-color: ${props => props.theme.colors.greyLight};
    }
    width: 100% ; 
    @media screen and (min-width:  ${props => props.theme.breakpoints[0]}) {
        width: auto;  
    }
`
let FlexCard = styled(Flex)`
    flex-direction: column;
    @media screen and (min-width:  ${props => props.theme.breakpoints[1]}) {
        flex-direction: row;  
    }
`
let TextCard = styled(Text)`
    text-align: center ;
    @media screen and (min-width:  ${props => props.theme.breakpoints[0]}) {
        text-align: start ; 
    }
`

class SubmitSpeaker extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            fullName: "",
            email: "",
            phone: "",
            topics: "",
            talk: "",
            links: "",
            fileUrl: "",
            photoUrl: "",
            delete_token_file: "",
            delete_token_photo: "",
            validated: false
        };
    }

    handleInputChange = (event) => {
        const value = event.target.value;
        const name = event.target.name;
        this.setState({ [name]: value });
        setTimeout(this.checkValidation, 0);
    }

    checkValidation = () => {
        const {fullName, email, topics} = this.state;

        if(fullName && email && topics) {
            this.setState({validated: true})
        } else {
            this.setState({validated: false})
        }
    }

    handleSubmit = async (event) => {
        event.preventDefault();
        const history = this.props.history;
        const table = "Speakers";
        const data = {
            fields: {
                Name: this.state.fullName,
                Topics: this.state.topics,
                Email: this.state.email,
                Phone: this.state.phone ? this.state.phone : "",
                Picture: [
                    {
                        url: this.state.photoUrl
                    }
                ],
                Talk: this.state.talk ? this.state.talk : "",
                Links: this.state.links ? this.state.links : "",
                Presentation: [
                    {
                        url: this.state.fileUrl
                    }
                ]
            },
            typecast: true 
        };
       
        const res = await createAirtableRecord(table, data);

        if(res.createdTime){
            if(this.state.delete_token_photo){
                await clearCloudinary(this.state.delete_token_photo);
            }
            if(this.state.delete_token_file){
                await clearCloudinary(this.state.delete_token_file);
            }
            
            this.setFileState(null, null);
            this.setPhotoState(null, null);
            history.push('/speakers');
        }
    }

    setFileState = (url, delete_token) => {
        url ? this.setState({ fileUrl: url }) : this.setState({ fileUrl: '' });
        delete_token ? this.setState({ delete_token_file: delete_token }) : this.setState({ delete_token_file: '' });
    }

    setPhotoState = (url, delete_token) => {
        url ? this.setState({ photoUrl: url }) : this.setState({ photoUrl: '' });
        delete_token ? this.setState({ delete_token_photo: delete_token }) : this.setState({ delete_token_photo: '' });
    }

    render() {
        return (
        <Fade bottom >
          <Flex 
            justifyContent="center"
            mt={[4, 5]}>

            <Card fontSize={3}
            p={3}
            my={2}
            width={[ 1, 1, 2/3, 1/2 ]}
            borderRadius={5}
            boxShadow="0 2px 6px rgba(0, 0, 0, 0.20)">
                <Text
                fontSize={[ 3, 4, 4 ]}
                textAlign='center'
                mt={3}
                mb={3}
                color='primary'>
                   submit talk
                </Text>
                <Text
                fontSize={[ 2, 2, 2 ]}
                textAlign='center'
                mb={[0,3]}
                px={[3,5]}
                color='secondary'>
                   Share your interests, to easily connect with upcoming events, and start inspiring your audiences!
                </Text>
                <form onSubmit={this.handleSubmit}>
                    <FlexCard pt={3}>
                        <Box p={3} width={[1,3/4, 1/2]}>
                            <TextCard color="greyDark" fontWeight={600} mb={2} >
                                speaker details
                            </TextCard>
                            <Input name="fullName" type="text" 
                                value={this.state.firstName} onChange={this.handleInputChange}
                                placeholder="Your full name (required)">
                            </Input>
                            <Input name="email" type="text" 
                                value={this.state.email} onChange={this.handleInputChange}
                                placeholder="Your email (required)">
                            </Input>
                            <Input name="phone" type="text" 
                                value={this.state.phone} onChange={this.handleInputChange}
                                placeholder="Your phone number">
                            </Input>
                            <TextCard color="greyDark" fontWeight={600} my={2} >
                                area(s) of expertise
                            </TextCard>
                            <Input name="topics" type="text" 
                                value={this.state.topics} onChange={this.handleInputChange}
                                placeholder="Topics - comma separated (required)">
                            </Input>
                            <TextCard color="greyDark" fontWeight={600} mb={3} mt={2} >
                                profile picture (optional)
                            </TextCard>
                            <PhotoUploader setImageState={this.setPhotoState}
                                imageUrl={this.state.photoUrl}
                                deleteToken={this.state.delete_token_photo} />
                        </Box>
                        <Box
                            p={3}
                            width={[1, 3/4, 1/2]}>
                            <TextCard color="greyDark" fontWeight={600} mb={2} >
                               talk subject (required)
                            </TextCard>
                            <Input name="talk" type="text" 
                                value={this.state.talk} onChange={this.handleInputChange}
                                placeholder="Headline of the speach">
                            </Input>
                            <TextCard color="greyDark" fontWeight={600} mb={3} mt={2} >
                                presantation (optional)
                            </TextCard>
                            <FileUploader setFileState={this.setFileState}
                                fileUrl={this.state.fileUrl}
                                deleteToken={this.state.delete_token_file} />
                            <TextCard color="greyDark" fontWeight={600} mb={2} mt={3} >
                               links (optional)
                            </TextCard>
                            <Input name="links" type="text" 
                                value={this.state.links} onChange={this.handleInputChange}
                                placeholder="blogs, videos, repos, etc.">
                            </Input>

                        </Box>
                    </FlexCard>
                    <Flex pl={3} mt={3} mb={3} mr={[3,4]} justifyContent="flex-end">
                        <Button type="submit"  variant='outline' disabled={!this.state.validated} >submit talk</Button>
                    </Flex>
                </form>   
            </Card>
        </Flex>
      </Fade>
      );
    }
}
export default SubmitSpeaker;
