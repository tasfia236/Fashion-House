import { ShoppingCart as ShoppingCartIcon } from "lucide-react"; // Rename the icon import
import React from "react";
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "./ui/sheet";
import { useSelector } from "react-redux";

export const ShoppingCartComponent = () => {
    const items = useSelector((state) => state.cart.cartItems); 
    const TotalPrice = useSelector((state) => 
        state.cart.cartItems.reduce((total, item) => total + item.price * item.quantity, 0) 
    );
    const totalItems = useSelector((state) =>
        state.cart.cartItems.reduce((total, item) => total + item.quantity, 0) 
    );

    return (
        <div>
            <Sheet>
                <SheetTrigger>
                    <ShoppingCartIcon /> <span>{totalItems}</span> {/* Display total items */}
                </SheetTrigger>
                <SheetContent>
                    <SheetHeader>
                        <SheetTitle>Your Shopping Cart</SheetTitle>
                        <SheetDescription>
                            Review your items before proceeding to checkout.
                        </SheetDescription>
                    </SheetHeader>

                    <div className="cart-items overflow-auto max-h-[400px]" >
                        {items.length > 0 ? (
                            <>
                                {items.map((item) => (
                                    <div
                                        key={item._id}
                                        className="cart-item"
                                        style={{
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "space-between",
                                            marginBottom: "15px",
                                            padding: "10px",
                                            border: "1px solid #ccc",
                                            borderRadius: "8px",
                                        }}
                                    >
                                        <img
                                            src={item.productImage}
                                            alt={item.productName}
                                            style={{
                                                width: "50px",
                                                height: "50px",
                                                borderRadius: "8px",
                                            }}
                                        />
                                        <div style={{ flex: "1", marginLeft: "15px" }}>
                                            <h4 style={{ margin: 0 }}>{item.productName}</h4>
                                            <p style={{ margin: "5px 0", fontSize: "14px" }}>
                                                Price: ${item.price?.toFixed(2) || "0.00"}
                                            </p>
                                            <p style={{ margin: 0, fontSize: "14px" }}>
                                                Quantity: {item.quantity || 1}
                                            </p>
                                        </div>
                                        <div style={{ textAlign: "right" }}>
                                            <p style={{ margin: 0 }}>
                                                Total: $
                                                {(item.price * (item.quantity || 1)).toFixed(2)}
                                            </p>
                                        </div>
                                    </div>
                                ))}

                                {/* Cart Summary */}
                                <div
                                    className="cart-summary"
                                    style={{
                                        marginTop: "20px",
                                        padding: "15px",
                                        borderTop: "2px solid #ccc",
                                    }}
                                >
                                    <h4
                                        style={{
                                            display: "flex",
                                            justifyContent: "space-between",
                                        }}
                                    >
                                        <span>Total Items:</span>
                                        <span>{totalItems}</span>
                                    </h4>
                                    <h4
                                        style={{
                                            display: "flex",
                                            justifyContent: "space-between",
                                            marginTop: "10px",
                                        }}
                                    >
                                        <span>Total Price:</span>
                                        <span>${TotalPrice.toFixed(2)}</span>
                                    </h4>
                                </div>
                            </>
                        ) : (
                            <p style={{ textAlign: "center", marginTop: "20px" }}>
                                Your cart is empty.
                            </p>
                        )}
                    </div>
                </SheetContent>
            </Sheet>
        </div>
    );
};

export default ShoppingCartComponent;
