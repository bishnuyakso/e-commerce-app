import CreateProductPageComponent from "./components/CreateProductPageComponent";
import axios from "axios";

const createProductApiRequest = async (formInputs) => {
  const { data } = await axios.post(`/api/products/admin`, { ...formInputs });
  return data;
};

const uploadImagesApiRequest = async (images, productId) => {
  const formData = new FormData();
  Array.from(images).forEach((image) => {
    formData.append("images", image);
  });
  await axios.post(
    "/api/products/admin/upload?productId=" + productId,
    formData
  );
};

const uploadImagesCloudinaryApiRequest = (images, productId) => {
  const url = "https://api.cloudinary.com/v1_1/dfl4afxzz/image/upload";
  const formData = new FormData();
  for (let i = 0; i < images.length; i++) {
    let file = images[i];
    formData.append("file", file);
    formData.append("upload_preset", "bvou8erk");
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        axios.post(
          "/api/products/admin/upload?cloudinary=true&productId=" + productId,
          data
        );
      });
  }
};

const AdminCreateProduct = () => {
  return (
    <CreateProductPageComponent
      createProductApiRequest={createProductApiRequest}
      uploadImagesApiRequest={uploadImagesApiRequest}
      uploadImagesCloudinaryApiRequest={uploadImagesCloudinaryApiRequest}
    />
  );
};

export default AdminCreateProduct;
