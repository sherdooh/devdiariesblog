import { ConnectDB } from "./lib/config/db.js";
import BlogModel from "./lib/models/BlogModel.js";

const updatePaths = async () => {
  try {
    await ConnectDB();

    const blogs = await BlogModel.find();

    const updateOperations = blogs.map(async (blog) => {
      let updatedPath = blog.image;

      if (updatedPath.startsWith('./')) {
        updatedPath = updatedPath.substring(2);
      }
      
      if (!updatedPath.startsWith('/')) {
        updatedPath = '/' + updatedPath;
      }

      if (updatedPath.startsWith('/./')) {
        updatedPath = updatedPath.substring(2);
      }

      // Log each operation for troubleshooting
      console.log(`Updating path from: ${blog.image} to: ${updatedPath}`);

      blog.image = updatedPath;
      return blog.save();
    });

    await Promise.all(updateOperations);

    console.log("Paths updated successfully");
  } catch (error) {
    console.error("Error updating paths:", error);
  } finally {
    process.exit();
  }
};

updatePaths();
