import express from "express";
import memberController from "./controllers/member.controller";
import uploader from "./libs/utils/uploader";
import productController from "./controllers/product.controller";
import orderController from "./controllers/order.controller";
const router = express.Router();

/** Member **/
router.get(
    "/member/restaurant", 
    memberController.getRestaurant
)

router.post(
    "/member/login", 
    memberController.login
);
router.post(
    "/member/signup", 
    memberController.signup
);
router.post(
    "/member/logout", 
    memberController.verifyAuth, 
    memberController.logout)
router.get(
    '/member/detail', 
    memberController.verifyAuth,
    memberController.getMemberDetail
)
router.post(
    "/member/update",
    memberController.verifyAuth,
    uploader("members").single("memberImage"),
    memberController.updateMember
)
router.get(
    '/member/top-users',
    memberController.getTopUsers
)

/** Product **/

router.get(
    "/product/all",
    productController.getProducts

)

router.get(
    "/product/:id",
    memberController.retrieveAuth,
    productController.getProduct
)

export default router;

/** Order **/

router.post(
    "/order/create",
    memberController.verifyAuth,
    orderController.createOrder
)

router.get("/order/all",
    memberController.verifyAuth,
    orderController.getMyOrders)

router.post("/order/update",
    memberController.verifyAuth,
    orderController.updateOrder
)


