exports.admin_validate = "select * from admin_tbl where name=? and password=?";

exports.customer_register = "insert into cus_reg_tbl set ?";

exports.customer_mobile = "select * from cus_reg_tbl where mobile=? ";

exports.customer_mail = "select * from cus_reg_tbl where mail = ?";

exports.cutomer_validate = "select * from cus_reg_tbl where mobile=? and password=?";

exports.cutomer_validate1 = "select * from cus_reg_tbl where mail=? and pwd=?";

exports.add_product = "insert into product set ?"