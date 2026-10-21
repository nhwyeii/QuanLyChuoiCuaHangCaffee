const express = require('express');
const cors = require('cors');
require('dotenv').config();
const { connectDB } = require('./config/db');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Kết nối SQL Server
connectDB().catch(() => console.warn('⚠️ Chưa kết nối được DB - kiểm tra file .env'));

app.get('/', (req, res) => {
    res.send('☕ Hệ thống Quản trị Chuỗi Cà Phê ERP/POS đang hoạt động!');
});

// TODO: import và đăng ký routes của từng phân hệ tại đây
// ví dụ: app.use('/api/products', require('./routes/productRoutes'));

app.listen(PORT, () => {
    console.log(`🚀 Server đang chạy tại http://localhost:${PORT}`);
});
