import Transaction from "../models/TransactionModel.js";
import User from "../models/UserSchema.js";
import moment from "moment";
import { Op } from "sequelize"; // ✅ Import Sequelize operators


export const addTransactionController = async (req, res) => {
  try {
    const { title, amount, description, date, category, userId, transactionType } = req.body;

    if (!title || !amount || !description || !date || !category || !transactionType) {
      return res.status(400).json({
        success: false,
        message: "Please fill in all fields",
      });
    }

    // ✅ Use Sequelize's `findByPk()` to check if user exists
    const user = await User.findByPk(userId);
    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    // ✅ Create transaction using Sequelize
    const newTransaction = await Transaction.create({
      title,
      amount,
      category,
      description,
      date,
      userId, // ✅ Ensure userId is passed correctly
      transactionType,
    });

    return res.status(201).json({
      success: true,
      message: "Transaction added successfully",
      transaction: newTransaction,
    });
  } catch (error) {
    console.error("Error adding transaction:", error);
    return res.status(500).json({ success: false, message: "Server error" });
  }
};

export const getAllTransactionController = async (req, res) => {
  try {
    const { userId, type, frequency, startDate, endDate } = req.body;

    console.log("Request Data:", userId, type, frequency, startDate, endDate);

    // ✅ Check if user exists
    const user = await User.findByPk(userId);
    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    // ✅ Define search conditions dynamically
    const whereCondition = { userId };

    if (type !== "all") {
      whereCondition.transactionType = type;
    }

    if (frequency !== "custom") {
      whereCondition.date = {
        [Op.gte]: moment().subtract(Number(frequency), "days").toDate(),
      };
    } else if (startDate && endDate) {
      whereCondition.date = {
        [Op.gte]: moment(startDate).toDate(),
        [Op.lte]: moment(endDate).toDate(),
      };
    }

    console.log("Query Conditions:", whereCondition);

    // ✅ Fetch transactions from MySQL
    const transactions = await Transaction.findAll({ where: whereCondition });

    return res.status(200).json({
      success: true,
      transactions,
    });
  } catch (error) {
    console.error("Error Fetching Transactions:", error);
    return res.status(500).json({
      success: false,
      message: "Server error",
      error: error.message, // ✅ Send error details for debugging
    });
  }
};


export const deleteTransactionController = async (req, res) => {
  try {
    const transactionId = req.params.id;
    const { userId } = req.body;

    // ✅ Check if user exists
    const user = await User.findByPk(userId);
    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    // ✅ Delete transaction in MySQL
    const transaction = await Transaction.findByPk(transactionId);
    if (!transaction) {
      return res.status(404).json({
        success: false,
        message: "Transaction not found",
      });
    }

    await transaction.destroy();

    return res.status(200).json({
      success: true,
      message: "Transaction successfully deleted",
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Server error",
    });
  }
};


export const updateTransactionController = async (req, res) => {
  try {
    const transactionId = req.params.id;
    const { title, amount, description, date, category, transactionType } = req.body;

    // ✅ Find transaction in MySQL
    const transaction = await Transaction.findByPk(transactionId);
    if (!transaction) {
      return res.status(404).json({
        success: false,
        message: "Transaction not found",
      });
    }

    // ✅ Update transaction fields
    transaction.title = title || transaction.title;
    transaction.description = description || transaction.description;
    transaction.amount = amount || transaction.amount;
    transaction.category = category || transaction.category;
    transaction.transactionType = transactionType || transaction.transactionType;
    transaction.date = date || transaction.date;

    await transaction.save(); // ✅ Save changes in MySQL

    return res.status(200).json({
      success: true,
      message: "Transaction updated successfully",
      transaction,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Server error",
    });
  }
};

