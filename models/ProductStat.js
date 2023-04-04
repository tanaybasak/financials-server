const mongoose= require('mongoose');
const ProductStatSchema = new mongoose.Schema({
    productId: String,
    yearlySalesTotal: Number,
    yearlyTotalSoldUnit : Number,
    year: Number,
    monthlyData: [
        {
            month: String,
            totalSales: Number,
            totalUnits: Number 
        }
    ],
    dailyData: [{
        totalSales: Number,
        totalUnits: Number,
        date: String
    }]
}, {timestamps : true})


const ProductStat  = mongoose.model("ProductStat", ProductStatSchema);
module.exports = ProductStat;