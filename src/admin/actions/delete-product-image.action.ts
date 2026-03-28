import { tesloApi } from "@/api/tesloApi";

export const deleteProductImageAction = async (fileName: string): Promise<void> => {
    if (!fileName) throw new Error("fileName is required");

    await tesloApi({
        url: `/files/product/${encodeURIComponent(fileName)}`,
        method: "DELETE",
    });
};
