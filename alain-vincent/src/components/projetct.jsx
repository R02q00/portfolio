const Project = () => {
    const projectList = [
        {
            photo: [],
            title: "OpenAI-Learning",
            desc: "",
            stack: [],
            link: ""
        },
        {
            photo: [],
            title: "Security web",
            desc: "",
            stack: [],
            link: ""
        },
        {
            photo: [],
            title: "DEVICE-FLOW",
            desc: "",
            stack: [],
            link: ""

        },
        {
            photo: [],
            title: "WEBCAM-SWITCH",
            desc: "",
            stack: [],
            link: ""
        }

    ]
    return (
        <div className="mt-4">
            <h1 className="text-xl font-semibold dark:text-white mb-2">Projects</h1>
            <div className="grid md:grid-cols-2 gap-3">
                {
                    projectList.map((value, index) => (
                        <div key={index}
                            className="bg-white dark:bg-gray-800 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 px-2 py-2 border border-gray-100 dark:border-gray-700"
                        >
                            <div className="grid md:grid-cols-2 item-center gap-3 mb-3">
                                {/* photo */}
                                <figure className="w-full h-50 rounded-lg overflow-hidden">

                                </figure>
                                {/* desc */}
                                <div>
                                    <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
                                        {value.title}
                                    </h3>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
}

export default Project;