"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = ({ env }) => ({
    auth: {
        secret: env("ADMIN_JWT_SECRET", "4e4361be1d8318704aa747b91bff0d32"),
    },
});
