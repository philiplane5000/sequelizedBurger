
# QUIK-BURGER (SEQUELIZED)

### About

* `QUIK-BURGER` is a restaurant app that allows users to choose from existing or input the names of burgers they would like to order/eat.

* Newly created burgers appear dynamically on screen under the `UNEATEN` menu list.

* Each `UNEATEN` burger comes with a `DEVOUR` button.

* On click, `DEVOUR` will send the burger over to the `EATEN` list.
    * `DEVOUR` button will not work until you provide a customer name (your name)

### Summary

* The app communicates with a `mysql` database to fetch or store new burger data. The on screen buttons trigger get or post requests via `express` to fetch or update appropriate burger data -- the response is rendered in the view appropriately.

* `QUIK-BURGER` is available to preview live on [Heroku](https://git.heroku.com/hidden-basin-15308.git) 

