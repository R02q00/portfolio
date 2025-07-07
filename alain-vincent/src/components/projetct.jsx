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

        }

    ]
    return (
        <div>
            <h1 className="text-xl font-semibold">Projects</h1>
            <div className="grid md:grid-cols-2 gap-3">
                {
                    projectList.map((value, index) => (
                        <div key={index} className="px-3 py-2 border-1 border-indigo-400 rounded-lg">
                            <div className="flex gap-1">
                                <div className="size-20 bg-gray-200">

                                </div>
                                <div>
                                    <h3 className="text-lg font-medium">{value.title}</h3>

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