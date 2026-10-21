# ☕ CafeManagement-Backend (khung dự án)

Backend ERP/POS cho chuỗi cà phê đa chi nhánh — Node.js + Express + SQL Server, kiến trúc MVC.
Repo này là **khung rỗng**: chỉ có `server.js`, kết nối DB và 3 thư mục trống `routes/`, `controllers/`, `models/`. Mỗi người tự tạo file và viết phần của mình.

## Cài đặt
```bash
git clone <link-repo>
cd CafeManagement-Backend
npm install
cp .env.example .env     # điền thông tin SQL Server của máy bạn
npm run dev
```
Server: http://localhost:5000

## Cấu trúc
```
config/db.js          Kết nối SQL Server (dùng chung)
routes/               Khai báo endpoint
controllers/          Nhận request, validate, trả response
models/               Truy vấn SQL
server.js             Khởi chạy & đăng ký routes
```
Mỗi phân hệ gồm 3 file, đặt tên theo mẫu: `routes/xRoutes.js` → `controllers/xController.js` → `models/xModel.js`. Tạo xong nhớ đăng ký route trong `server.js`.

## Phân hệ & phân công
| Phân hệ | Prefix | File | Người làm |
|---|---|---|---|
| Chi nhánh | /api/erp/branches | branch* | |
| Nhân sự, chấm công | /api/erp/hr | hr* | |
| Ca làm, thu chi | /api/erp/shift | shift* | |
| Bán hàng POS | /api/erp (pos-init, orders) | order* | |
| Màn hình KDS | /api/erp/kds | kds* | |
| Thực đơn | /api/products | product* | |
| Kho | /api/erp/inventory | inventory* | |
| Khuyến mãi, CRM | /api/erp/promotions | promo* | |

## Quy ước code
- Response luôn có dạng `{ success: true/false, message, ...data }`.
- Truy vấn SQL dùng `request.input(...)` (tham số hóa), **không** nối chuỗi trực tiếp (tránh SQL injection).
- Đặt tên biến/cột DB theo đúng database `CoffeeChainSystem`.

## Quy tắc Git
- Không push thẳng lên `main`/`develop`. Mỗi người một nhánh: `feature/<phan-he>-<chuc-nang>`.
- Commit: `feat: ...`, `fix: ...`, `docs: ...`.
- Xong thì tạo Pull Request vào `develop`, có người review mới merge.
- **Không commit file `.env`**.

```bash
git checkout develop && git pull
git checkout -b feature/product-crud
# ...code...
git add . && git commit -m "feat: them CRUD san pham"
git push -u origin feature/product-crud
```
