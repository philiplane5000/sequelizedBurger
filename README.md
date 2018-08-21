
# QUIK-BURGER

### About

* `QUIK-BURGER` is a restaurant app that allows users to choose from existing or input the names of burgers they would like to order/eat.

* Newly created `burgers` appear dynamically on screen under the `Uneaten` menu list.

* Each `Uneaten` burger comes with a `Devour` button.

* On click, `Devour` will send the burger over to the `Eaten` list.

### Summary

* The app communicates with a `mysql` database to fetch or store new burger data. The on screen buttons trigger get or post requests via `express` to fetch or update the appropriate burger data -- the response is rendered in the view appropriately.

* `QUIK-BURGER` is available to preview live on [Heroku](https://quiet-refuge-58626.herokuapp.com/) 

