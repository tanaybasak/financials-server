const express = require('express');
const mongoose = require('mongoose');
const helmet = require('helmet');
const morgan = require('morgan');
const dotenv = require('dotenv');
const cors = require('cors');

const User = require('./models/User');
const Product = require('./models/Product');
const ProductStat = require('./models/ProductStat');
const Transaction = require('./models/Transaction');
const OverallStat = require('./models/OverallStat');
const AffiliateStat = require('./models/AffiliateStat');
const { dataUser, dataProduct, dataProductStat, dataTransaction, dataOverallStat, dataAffiliateStat } = require('./data');


dotenv.config();
const app = express();
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: 'cross-origin' }));
app.use(morgan('common'));
app.use(cors());

/** ROUTES */
const clientRoutes = require('./routes/client');

const generalRoutes = require('./routes/general');

const managementRoutes = require('./routes/management');

const salesRoutes = require('./routes/sales');



app.use('/client', clientRoutes);
app.use('/general', generalRoutes);
app.use('/management', managementRoutes);
app.use('/sales', salesRoutes);

/**MONGOOSE SETUP */

const PORT = process.env.PORT || 5000;
mongoose.connect(process.env.MONGODB_URI, {
    useUnifiedTopology: true
}).then(() => {
    app.listen(PORT, () => console.log(`Server Port : ${PORT}`));
    // AffiliateStat.insertMany(dataAffiliateStat)
    // User.insertMany(dataUser);
    // Product.insertMany(dataProduct);
    // ProductStat.insertMany(dataProductStat);
    // Transaction.insertMany(dataTransaction);
    // OverallStat.insertMany(dataOverallStat);
}).catch((error) => console.log(error));