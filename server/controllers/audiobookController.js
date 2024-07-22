const Audiobook = require('../models/Audiobook');
// const initialAudiobooks = require('../audiobookData');

// add a new audiobook
exports.addAudiobook = async (req, res) => {
  try {
    const audiobook = new Audiobook(req.body);
    await audiobook.save();

    res.status(201).send(audiobook);
  } catch (error) {
    res.status(400).send(error);
  }
};

// get all audiobooks
exports.getAllAudiobooks = async (req, res) => {
  try {
    const audiobooks = await Audiobook.find().sort({ createdAt: -1 });
    res.status(200).send(audiobooks);
  } catch (error) {
    res.status(500).send(error);
  }
};

// get audiobook by ID
exports.getAudiobookById = async (req, res) => {
  try {
    const audiobook = await Audiobook.findById(req.params.id).populate('reviews');
    if (!audiobook) {
      return res.status(404).json({ message: 'Audiobook not found' });
    }
    res.status(200).send(audiobook);
  } catch (error) {
    console.error('Error fetching audiobook details:', error);
    res.status(500).json({ message: 'Error fetching audiobook details', error });
  }
};

// delete audiobook by ID
exports.deleteAudiobook = async (req, res) => {
  try {
    const audiobook = await Audiobook.findByIdAndDelete(req.params.id);
    if (!audiobook) {
      return res.status(404).send({ message: 'Audiobook not found' });
    }

    res.status(200).send(audiobook);
  } catch (error) {
    console.error('Error deleting audiobook:', error);
    res.status(500).send({ message: 'Server error' });
  }
};

// Update audiobook by ID
exports.updateAudiobookById = async (req, res) => {
  try {
    const audiobook = await Audiobook.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );

    if (!audiobook) {
      return res.status(404).send({ message: 'Audiobook not found' });
    }

    res.status(200).send(audiobook);
  } catch (error) {
    console.error('Error updating audiobook:', error);
    res.status(500).send({ message: 'Server error' });
  }
};


// Export the in-memory array for other parts of the application if needed
exports.getAudiobookArray = () => audiobookArray;