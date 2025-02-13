import React, { useEffect, useState } from "react";
import { supabase } from "../../../supabase";
import { ClipLoader } from "react-spinners";
import { useSelector } from "react-redux";

const Recent = () => {
  const [uiProjects, setuiProjects] = useState([]);
  const [loadingUi, setLoadingUi] = useState(true);
  const [loadingFlutter, setLoadingFlutter] = useState(true);
  const [flutterProjects, setflutterProjects] = useState([]);
  const theme = useSelector((state) => state.theme.mode);

  useEffect(() => {
    const fetchProjects = async () => {
      const { data, error } = await supabase
        .from("ui")
        .select("*")
        .limit(1)
        .order("date", { ascending: false });

      if (error) console.log("Error fetching UI data:", error);
      else setuiProjects(data);
      setLoadingUi(false);
    };

    fetchProjects();
  }, []);

  useEffect(() => {
    const fetchProjects = async () => {
      const { data, error } = await supabase
        .from("flutter")
        .select("*")
        .limit(1)
        .order("date", { ascending: false });

      if (error) console.log("Error fetching Flutter data:", error);
      else setflutterProjects(data);
      setLoadingFlutter(false);
    };

    fetchProjects();
  }, []);

  return (
    <div className="py-10 px-3 bg-white">
      {loadingUi || loadingFlutter ? (
        <div className="text-center mt-4">
          <ClipLoader size={50} color={"#123abc"} loading={true} />
        </div>
      ) : (
        <div className={`rounded-lg ${theme === 1 ? "bg-black" : "bg-white"}`}>
          <div className="pt-5">
            <h1 className="text-center text-3xl font-bold">
              Latest from my workspace
            </h1>
          </div>

          {/* UI & Flutter Section with Equal Width */}
          <div
            className={`flex flex-col lg:flex-row items-stretch rounded-lg ${
              theme === 1 ? "bg-black" : "bg-white"
            } p-4 gap-4`}
          >
            {/* UI Section */}
            <div className="p-4 w-full lg:w-1/2">
              {uiProjects.map((project) => (
                <article
                  key={project.id}
                  className="relative overflow-hidden rounded-lg shadow-sm hover:shadow-lg hover:-translate-x-2 hover:-translate-y-2 hover:border-b-4 hover:border-r-4 hover:border-blue-500 transition-all"
                >
                  <img
                    alt=""
                    src={project.image}
                    className="absolute inset-0 h-full w-full object-cover"
                  />
                  <div className="relative bg-gradient-to-t from-gray-900 to-gray-900/25 pt-32 sm:pt-48 lg:pt-64">
                    <div className="p-4 sm:p-6">
                      <time className="block text-xs text-white/90">
                        {project.date}
                      </time>
                      <h3 className="mt-0.5 text-lg text-white">
                        {project.title}
                      </h3>
                      <p className="mt-2 text-sm text-white/95">
                        <p className="mt-4">Tool: {project.tool}</p>
                        <p>Palette: {project.color}</p>
                        <p>Typography: {project.typography}</p>
                      </p>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            {/* Flutter Section */}
            <div className="p-4 w-full lg:w-1/2">
              {flutterProjects.map((project) => (
                <article
                  key={project.id}
                  className="relative overflow-hidden rounded-lg shadow-sm hover:shadow-lg hover:-translate-x-2 hover:-translate-y-2 hover:border-b-4 hover:border-r-4 hover:border-blue-500 transition-all"
                >
                  <img
                    alt=""
                    src={project.image}
                    className="absolute inset-0 h-full w-full object-cover"
                  />
                  <div className="relative bg-gradient-to-t from-gray-900 to-gray-900/25 pt-32 sm:pt-48 lg:pt-64">
                    <div className="p-4 sm:p-6">
                      <time className="block text-xs text-white/90">
                        {project.date}
                      </time>
                      <h3 className="mt-0.5 text-lg text-white">
                        {project.title}
                      </h3>
                      <p className="mt-2 text-sm text-white/95">
                        {project.description}
                      </p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Recent;
