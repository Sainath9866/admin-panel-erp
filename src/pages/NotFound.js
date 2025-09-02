import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
const NotFound = ()=>{
    const location = useLocation();
    const navigate = useNavigate();
    useEffect(()=>{
        console.error("404 Error: User attempted to access non-existent route:", location.pathname);
    }, [
        location.pathname
    ]);
    return /*#__PURE__*/ _jsx("div", {
        className: "min-h-screen flex items-center justify-center bg-gradient-surface",
        children: /*#__PURE__*/ _jsxs(Card, {
            className: "erp-card w-full max-w-md text-center",
            children: [
                /*#__PURE__*/ _jsxs(CardHeader, {
                    children: [
                        /*#__PURE__*/ _jsx(CardTitle, {
                            className: "text-6xl font-bold text-primary mb-4",
                            children: "404"
                        }),
                        /*#__PURE__*/ _jsx("h2", {
                            className: "text-2xl font-semibold text-foreground",
                            children: "Page Not Found"
                        })
                    ]
                }),
                /*#__PURE__*/ _jsxs(CardContent, {
                    children: [
                        /*#__PURE__*/ _jsx("p", {
                            className: "text-muted-foreground mb-6",
                            children: "The page you're looking for doesn't exist or has been moved."
                        }),
                        /*#__PURE__*/ _jsxs("div", {
                            className: "space-y-2",
                            children: [
                                /*#__PURE__*/ _jsx(Button, {
                                    onClick: ()=>navigate("/"),
                                    className: "w-full",
                                    children: "Return to Dashboard"
                                }),
                                /*#__PURE__*/ _jsx(Button, {
                                    variant: "outline",
                                    onClick: ()=>navigate(-1),
                                    className: "w-full",
                                    children: "Go Back"
                                })
                            ]
                        })
                    ]
                })
            ]
        })
    });
};
export default NotFound;
