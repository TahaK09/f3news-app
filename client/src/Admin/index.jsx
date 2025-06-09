// src/pages/AdminNewsUpload.jsx
import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";

const AdminNewsUpload = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { isSubmitting, isSubmitSuccessful },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      await axios.post("http://localhost:5000/api/news", data);
      alert("News article uploaded successfully!");
      reset();
    } catch (err) {
      console.error(err);
      alert("Error uploading article");
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-xl my-40 border border-gray-200">
      <h2 className="text-3xl font-bold mb-6 text-center">
        Upload News Article
      </h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <input
          {...register("title", { required: true })}
          className="w-full p-2 border rounded"
          placeholder="Title"
        />
        <textarea
          {...register("summary")}
          className="w-full p-2 border rounded"
          placeholder="Summary (optional)"
        />
        <textarea
          {...register("content", { required: true })}
          className="w-full p-2 border rounded h-32"
          placeholder="Full Content"
        />
        <input
          {...register("image_url")}
          className="w-full p-2 border rounded"
          placeholder="Image URL"
        />
        <input
          {...register("category", { required: true })}
          className="w-full p-2 border rounded"
          placeholder="Category"
        />
        <input
          {...register("subcategory")}
          className="w-full p-2 border rounded"
          placeholder="Subcategory (optional)"
        />
        <input
          {...register("author", { required: true })}
          className="w-full p-2 border rounded"
          placeholder="Author"
        />
        <input
          {...register("tags")}
          className="w-full p-2 border rounded"
          placeholder="Tags (comma-separated)"
        />

        <div className="flex items-center space-x-2">
          <label className="font-medium">Featured:</label>
          <input type="checkbox" {...register("is_featured")} />
        </div>

        <select {...register("status")} className="w-full p-2 border rounded">
          <option value="draft">Draft</option>
          <option value="published">Published</option>
          <option value="archived">Archived</option>
        </select>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
        >
          {isSubmitting ? "Submitting..." : "Submit Article"}
        </button>
      </form>
    </div>
  );
};

export default AdminNewsUpload;
