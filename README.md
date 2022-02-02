# Yelp Fusion API Frontend

### Description
Simple React UI to display Yelp top 20 restaurant data for a given city (currently static for Evanston, IL). Users can then click on a top 20 business to make another API call for important business details. Designed as a demo technical assessment for Coding Temple Alumni

## GET STARTED HERE:
- clone the repo
- `cd` into the cloned repo `yelp-challenge`
- create and activate a python virtualenv
- Run `pip install -r requirements.txt`
- Follow instructions on [Yelp Fusion Docs](https://www.yelp.com/developers/documentation/v3/get_started) to get an API key. Store key in `.env` file
- Starting up the flask server:
  - Set Environment variables in shell:
    - Mac/Linux:
      - `export FLASK_ENV=development`
      - `export FLASK_APP=yelp`
    - Windows:
      - `set FLASK_ENV=development`
      - `set FLASK_APP=yelp`
  - Start server with `flask run` command


### API Routes
- /api/city/\<city\>/\<term\> => GET request -- get top 20 businesses in a specific city and category filter
- /api/business/\<id\> => GET request -- get business details given a Yelp biz ID

#### React Frontend Example(s):
- https://github.com/nwelter1/yelp-challenge
