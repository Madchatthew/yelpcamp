var express         = require('express'),
    router          = express.Router(),
    Campground      = require('../models/campground')
    middleware      = require('../middleware')

//====================
// Campground routes
//====================

// Index route
router.get("/", function(req, res) {
    // Get all campgrounds from DB
    Campground.find({}, function(err, allCampgrounds) {
        if(err) {
            console.log(err);
        } else {
            res.render("campgrounds/index", {campgrounds: allCampgrounds})
        }
    })
})

// Create route
router.post("/", middleware.isLoggedIn, function(req, res) {
    // Get data from from and add to campgrounds array
    var name    = req.body.name
        price   = req.body.price
        image   = req.body.image
        desc    = req.body.description
        author  = {
        id: req.user._id,
        username: req.user.username
    }
        newCampground = {name: name, price: price, image: image, description: desc, author: author}
    // campgrounds.push(newCampground); Replaced by DB commands
    // Create a new campground and send it to the DB
    Campground.create(newCampground, function(err, newlyCreated) {
        if(err) {
            console.log(err)
        } else {
            res.redirect("/campgrounds")
        }
    })
})

// New route
router.get("/new", middleware.isLoggedIn, function(req, res) {
    res.render("campgrounds/new")
})

// Show route
router.get("/:id", function(req, res) {
    // Find the campground of the specific id
    Campground.findById(req.params.id).populate('comments').exec(function(err, foundCampground) {
        if(err || !foundCampground) {
            req.flash('error', 'Campground not found.')
            res.redirect('back')
        } else {
            // Render show template with that campground
            res.render("campgrounds/show", {campground: foundCampground})
        }
    })
})

router.get('/:id/edit', middleware.checkCampgroundOwnership, function(req, res) {
    // Edit campground route
        Campground.findById(req.params.id, function(err, foundCampground) {
            res.render('campgrounds/edit', {campground: foundCampground})
    })
})

router.put('/:id', middleware.checkCampgroundOwnership, function(req, res) {
    // Find and update the correct campground
    Campground.findByIdAndUpdate(req.params.id, req.body.campground, function(err, updatedCampground) {
        if(err) {
            res.redirect('/campgrounds')
        } else {
            res.redirect('/campgrounds/' + req.params.id)
        }
    })
})

// Destroy campground route
router.delete('/:id', middleware.checkCampgroundOwnership, function(req, res) {
    Campground.findByIdAndRemove(req.params.id, function(err) {
        if(err) {
            res.redirect('/campgrounds')
        } else {
            res.redirect('/campgrounds')
        }
    })
})

module.exports = router