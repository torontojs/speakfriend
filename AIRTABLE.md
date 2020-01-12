# Using Airtable

[Airtable](https://airtable.com/) is a cloud-based, flexible database with a spreadsheet-like interface that syncs changes across all your devices.

## Installation

No installation is necessary. Instead, sign up for Airtable [here](https://airtable.com/signup). The following steps will activate the free plan:

- After signing up, click continue until you get to the option to add a credit card
- Do not add your card details. Instead click on **skip**
- You will be taken to your workspace home screen.

## Creating a dummy base

Once you create an account, you will be redirected to the dashboard page. Click the **Add a base** button, and select **start from scratch**. Set the file name as "Speak Friend". This will create a blank database that you may populate with dummy data.

You will need two tables - one for the speakers database, and the second for events. The tables will be called 'talks' and 'events' respectively.

The tables themselves require multiple columns, which for each table are as follows:
(all columns are single line text fields unless otherwise specified)

'talks'

1. Speaker
2. Talk
3. Topics
4. Description (Long text field)
5. Email

'events'

1. Event
2. Email
3. Organization
4. Location
5. Date
6. Description (Long text field)

A video walkthrough of all the features is available [here](https://vimeo.com/165624533/472b9dcc9c).

## Generating an API key

Navigate to [account overview](https://airtable.com/account). Under the secton **<>API** click '_Generate API key_'. To reveal the key, click within the textbox.

## Contributing to Speak Friend

In order to contribute to the project, you will need to use your own API key and store it as an environment variable in your local files.

Make sure to clone a copy of this repo(?).

In the file named **.env.schema** you will find a variable declaration. Set the value of the variable to your API key. For example:

`REACT_APP_AIRTABLE_API_KEY = myuniqueapikey231`

<!-- Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change. -->
