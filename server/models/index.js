const Cat = require('./Cat.js');

// index.js gets automatically pulled when 
// a folder is required. We use this to our 
// advantage to define an API for this package.
// We could use it to pull as many files as 
// necessary and send it back as one API
// That way the user only has to implement one 
// require for all of the files in this folder 
// we want them to use

const newCat = async (req, res) => {

}




//Missing stuff here










const setName = (req, res) => {
    if (!req.body.firstname || !req.body.lastname) {
        return res.status(400).json({ error: 'firstname and lastname are both required' });
    }

    const catData = {
        name: `${req.body.firstname} ${req.body.lastname}`,
        bedsOwned: req.body.beds,
    };

    const newCat = new Cat(catData);

    try {
        await newCat.save();
        return res.status(201).json({
            name: newCat.name,
            beds: newCat.bedsOwned,
        })
    } catch (err) {
        return res.status(500).json({ error: 'An error occurred while saving the cat' });
    }
};

const searchName = (req, res) => {
    if (!req.query.name) {
        return res.status(400).json({ error: 'Name is required to perform a search' });
    }
};

const updateLast = (req, res) => {

};




