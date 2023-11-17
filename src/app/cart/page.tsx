"use client";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart, updateCartItemQuantity } from "../redux/cart";
import { RootState } from "../redux/store";
import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Typography,
} from "@mui/material";
import Layout from "../shared/userLayout";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { IoTrashOutline } from "react-icons/io5";

const CartPage = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state: RootState) => state.cart.items);

  const TAX_RATE = 18;

  const handleRemoveFromCart = (itemId: number) => {
    dispatch(removeFromCart(itemId));
  };

  const handleUpdateQuantity = (itemId: number, quantity: number) => {
    dispatch(updateCartItemQuantity({ id: itemId, quantity }));
  };

  const calculateTotal = () => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };

  return (
    <Layout title="Shopping Cart">
      <Grid container spacing={4} justifyContent="center" alignItems="center">
        <Grid item xs={12} md={8}>
          <Typography variant="h4" gutterBottom>
            Shopping Cart
          </Typography>
          {cartItems.length === 0 ? (
            <Typography>Your cart is empty.</Typography>
          ) : (
            <TableContainer component={Paper} className="my-5">
              <Table aria-label="spanning table">
                <TableHead>
                  <TableRow>
                    <TableCell align="left">Item</TableCell>
                    <TableCell align="right">Price</TableCell>
                    <TableCell align="center">Quantity</TableCell>
                    <TableCell align="center">Total</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {/* {rows.map((row) => (
                    <TableRow key={row.desc}>
                      <TableCell>{row.desc}</TableCell>
                      <TableCell align="left">{row.qty}</TableCell>
                      <TableCell align="left">{row.unit}</TableCell>
                      <TableCell align="left">{ccyFormat(row.price)}</TableCell>
                    </TableRow>
                  ))} */}

                  {cartItems.map((item) => {
                    return (
                      <TableRow key={item.id}>
                        <TableCell align="left">
                          <div className="flex items-center justify-around">
                            <img
                              src="https://media.istockphoto.com/id/1449032425/photo/shopping-bag-full-of-healthy-food-on-blue.webp?b=1&s=170667a&w=0&k=20&c=FsWV_fWhTFhGtQq2KN0Kt3tqcqR5yk_ck0_qpRgu7tU="
                              alt=""
                              height={100}
                              width={100}
                            />
                            <div className="name ">
                              <Typography
                                component="p"
                                variant="caption"
                                className=""
                              >
                                {" "}
                                {item.name}
                              </Typography>
                              <Typography
                                component="h2"
                                variant="subtitle1"
                                className=""
                              >
                                {" "}
                                {item.name}
                              </Typography>
                            </div>
                          </div>
                        </TableCell>
                        <TableCell align="right">₹{item.price}</TableCell>
                        <TableCell align="right">
                          <Box className="flex justify-center items-center">
                            <Button
                              variant="outlined"
                              onClick={() =>
                                handleUpdateQuantity(item.id, item.quantity - 1)
                              }
                              className="text-xl min-w-0 my-2 mx-1  p-1.5 "
                            >
                              <IoIosArrowDown />
                            </Button>
                            <Typography
                              component="p"
                              variant="subtitle2"
                              className="mx-2"
                            >
                              {item.quantity}
                            </Typography>
                            <Button
                              variant="outlined"
                              onClick={() =>
                                handleUpdateQuantity(item.id, item.quantity + 1)
                              }
                              className="text-xl min-w-0 my-2 mx-1  p-1.5 "
                            >
                              <IoIosArrowUp />
                            </Button>
                          </Box>
                        </TableCell>
                        <TableCell align="center">
                          ₹{item.quantity * item.price}
                        </TableCell>
                      </TableRow>
                    );
                  })}

                  <TableRow>
                    <TableCell rowSpan={4} />
                    <TableCell colSpan={2}>Subtotal</TableCell>
                    <TableCell align="center">₹{calculateTotal()}</TableCell>
                  </TableRow>
                  <TableRow>
                    
                    <TableCell>Tax</TableCell>
                    <TableCell align="center">{TAX_RATE} %</TableCell>
                    <TableCell align="center">
                      {((TAX_RATE * calculateTotal()) / 100).toFixed(2)}
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell colSpan={2}>Total</TableCell>
                    <TableCell align="center">
                      {(
                        (TAX_RATE * calculateTotal()) / 100 +
                        calculateTotal()
                      ).toFixed(2)}
                    </TableCell>
                  </TableRow>
                  <TableRow className="border-t-2 border-primary" >
                    <TableCell colSpan={2} ></TableCell>
                    <TableCell align="center">
                      <Button
                        variant="contained"
                        color="primary"
                        className="ml-auto "
                      >
                        Checkout
                      </Button>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>

            // <div>
            //   {cartItems.map((item) => (
            //     <Card
            //       key={item.id}
            //       className="my-5 border-[1px] border-gray-300 shadow-none rounded-2xl hover:shadow-lg relative"
            //     >
            //       <CardContent className="flex items-center justify-between w-full p-5">
            //         <div className="img-container w-1/4 p-5">
            //           <img
            //             src="https://media.istockphoto.com/id/1449032425/photo/shopping-bag-full-of-healthy-food-on-blue.webp?b=1&s=170667a&w=0&k=20&c=FsWV_fWhTFhGtQq2KN0Kt3tqcqR5yk_ck0_qpRgu7tU="
            //             alt=""
            //             className="w-full h-auto"
            //           />
            //         </div>

            //         <div className="flex flex-col justify-center items-start w-1/4 p-5 bg-white rounded">
            //           <Typography
            //             className="mb-2 text-lg font-bold"
            //             variant="subtitle1"
            //             component="p"
            //           >
            //             {item.name}
            //           </Typography>
            //           <Typography className="mb-2" variant="subtitle1" component="p">
            //             Price: ${item.price}
            //           </Typography>
            //           <Typography className="mb-2" variant="subtitle1" component="p">
            //             Quantity: {item.quantity}
            //           </Typography>
            //           <Typography variant="subtitle1" component="p">
            //             Total: ${item.quantity * item.price}
            //           </Typography>
            //         </div>

            //         <div className="quantity w-1/4 flex flex-col items-center justify-center">
            //           <Button
            //             onClick={() =>
            //               handleUpdateQuantity(item.id, item.quantity + 1)
            //             }
            //             className="text-2xl min-w-0 my-2 bg-primary text-white rounded-full p-1.5 hover:bg-dark"
            //           >
            //             <IoIosArrowUp />
            //           </Button>
            //           <TextField
            //             type="number"
            //             value={item.quantity}
            //             onChange={(e) =>
            //               handleUpdateQuantity(item.id, +e.target.value)
            //             }
            //             inputProps={{
            //               style: {
            //                 textAlign: "center",
            //                 padding: "8px",
            //                 borderRadius: "8px",
            //                 border: "1px solid #ccc",
            //               },
            //             }}
            //             className="w-12"
            //             disabled
            //           />
            //           <Button
            //             onClick={() =>
            //               handleUpdateQuantity(item.id, item.quantity - 1)
            //             }
            //             className="text-2xl min-w-0 my-2 bg-primary text-white rounded-full p-1.5 hover:bg-dark"
            //           >
            //             <IoIosArrowDown />
            //           </Button>
            //         </div>

            //         <Button
            //           onClick={() => handleRemoveFromCart(item.id)}
            //           className="absolute text-2xl text-white bg-red-500 top-2 right-2 p-2 rounded-full hover:bg-red-700"
            //         >
            //           <IoTrashOutline />
            //         </Button>
            //       </CardContent>
            //     </Card>
            //   ))}

            //   <Typography className="text-xl font-bold mt-4">
            //     Total: ${calculateTotal()}
            //   </Typography>
            //   <Button variant="contained" color="primary" className="mt-4">
            //     Checkout
            //   </Button>
            // </div>
          )}
        </Grid>
      </Grid>
    </Layout>
  );
};

export default CartPage;
