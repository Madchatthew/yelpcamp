var mongoose        = require('mongoose'),
    Campground      = require('./models/campground'),
    Comment         = require('./models/comment')

var seeds = [
    {
        name:           'Mountain Top',
        image:          'http://webdev:3000/images/mountaintop.jpg',
        description:    'Lucas ipsum dolor sit amet gricho yuvernian sebulba ki-adi-mundi conan dodonna ponda skirata noghri xizor. Darpa veers ferroans kor-uj valorum tlanda noa nute. Squib latter joelle hoojib ventress quelli. Teneniel organa klatooinian oswaft jobal quinlan olié san. Organa kenobi naberrie gizka oppo. Solo zekk malastare cathar rune emtrey rendar atrivis. Sunrider bimm halla ugnaught hutta bothan evazan. Meridian keshiri moddell ulic ki-adi-mundi watto sluis lars. Cathar ablajeck jawa maximilian padmé kit nien.'
    },
    {
        name:           'Desert Mesa',
        image:          'http://webdev:3000/images/desert.jpg',
        description:    'Lucas ipsum dolor sit amet gricho yuvernian sebulba ki-adi-mundi conan dodonna ponda skirata noghri xizor. Darpa veers ferroans kor-uj valorum tlanda noa nute. Squib latter joelle hoojib ventress quelli. Teneniel organa klatooinian oswaft jobal quinlan olié san. Organa kenobi naberrie gizka oppo. Solo zekk malastare cathar rune emtrey rendar atrivis. Sunrider bimm halla ugnaught hutta bothan evazan. Meridian keshiri moddell ulic ki-adi-mundi watto sluis lars. Cathar ablajeck jawa maximilian padmé kit nien.'
    },
    {
        name:           'Valley Below',
        image:          'http://webdev:3000/images/valley.jpg',
        description:    'Lucas ipsum dolor sit amet gricho yuvernian sebulba ki-adi-mundi conan dodonna ponda skirata noghri xizor. Darpa veers ferroans kor-uj valorum tlanda noa nute. Squib latter joelle hoojib ventress quelli. Teneniel organa klatooinian oswaft jobal quinlan olié san. Organa kenobi naberrie gizka oppo. Solo zekk malastare cathar rune emtrey rendar atrivis. Sunrider bimm halla ugnaught hutta bothan evazan. Meridian keshiri moddell ulic ki-adi-mundi watto sluis lars. Cathar ablajeck jawa maximilian padmé kit nien.'
    }
]

async function seedDB() {
    // Remove all campgrounds
    try {
        await Campground.remove({})
        console.log('Campgrounds Removed!')
        await Comment.remove({})
        console.log('Comments Removed!')
        // for(const seed of seeds) {
        //     let campground = await Campground.create(seed)
        //     console.log('Campground Created!')
        //     let comment = await Comment.create(
        //         {
        //             text:   'This place is great, but I wish there was internet',
        //             author: 'Homer'
        //         }
        //     )
        //     console.log('Comment Created!')
        //     campground.comments.push(comment)
        //     campground.save()
        //     console.log('Comment Added To Campgrounds!')
        // }
    } catch(err){
        console.log(err)
    }
}

module.exports = seedDB