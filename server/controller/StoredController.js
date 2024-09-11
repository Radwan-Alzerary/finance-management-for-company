import Stored from "../models/StoredSchema.js";

export const getProducer = async (req, res) => {
  try {
    const producers = await Stored.find(); 

    res.status(200).json(producers);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const getProducerById = async (req, res) => {
  try {
    const producer = await Stored.findById(req.params.id);

    res.status(200).json(producer);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const createProducer = async (req, res) => {
  // const producer = req.body;
  const producer = req.body;

  const newProducer = new Stored(producer);

  try {
    await newProducer.save();
    res.status(201).json(newProducer);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};


export const updateProducer = async (req, res) => {
  const producer = req.body;

  try {
    
    const updatedProducer = await Stored.findByIdAndUpdate(
      req.params.id,
      producer,
      { new: true, runValidators: true }
    );

    if (!updatedProducer) {
      return res.status(404).json({ message: "Producer not found" });
    }

    res.status(200).json(updatedProducer);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};


export const deleteProducer = async (req, res) => {
  try {
    await Stored.deleteOne({ _id: req.params.id });
    res.status(201).json({ message: "Producer deleted Successfully" });
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};
