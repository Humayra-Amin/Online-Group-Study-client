import faq from '../../assets/images/faq.webp'

const FAQ = () => {
    return (
        <div className="container mx-auto">

            <div className="text-center my-16">
                <h2 className="text-4xl lg:text-5xl font-roboto font-semibold mt-8 lg:mt-6">FAQ's</h2>
                <p className="mt-4 font-sedan text-xl">Some relevant questions that you must know or want to know about us</p>
            </div>

            <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-start">

                <div className="lg:ml-28">
                    <img data-aos="zoom-in-up" data-aos-duration="1000" src={faq} className="lg:w-[600px] lg:h-[500px]" />
                </div>

                <div className="md:w-[500px] lg:w-[500px] lg:ml-20">

                    <div className="collapse collapse-plus bg-pink-200 mb-4 text-black">
                        <input type="radio" name="my-accordion-3" />
                        <div className="collapse-title text-xl font-medium">
                        How do I join a study group?
                        </div>
                        <div className="collapse-content bg-pink-400">
                            <p>To join a study group, simply browse through the available groups on our platform and click on the "Join" button next to the group you're interested in. If the group is private, you may need to request to join and wait for approval from the group's administrator.</p>
                        </div>
                    </div>

                    <div className="collapse collapse-plus bg-pink-200 mb-4 text-black">
                        <input type="radio" name="my-accordion-3" />
                        <div className="collapse-title text-xl font-medium">
                        What subjects are available for study groups?
                        </div>
                        <div className="collapse-content bg-pink-400">
                            <p>Our platform hosts study groups for a wide range of subjects, including but not limited to mathematics, science, literature, history, computer science, languages, and more. You can explore the available groups and filter them based on your interests.</p>
                        </div>
                    </div>

                    <div className="collapse collapse-plus bg-pink-200 mb-4 text-black">
                        <input type="radio" name="my-accordion-3" />
                        <div className="collapse-title text-xl font-medium">
                        How do I create a new study group?
                        </div>
                        <div className="collapse-content bg-pink-400">
                            <p>To create a new study group, navigate to the "Create Group" page and fill out the required information, including the group name, subject, description, and privacy settings. Once created, you can invite others to join your group and start studying together.</p>
                        </div>
                    </div>

                    <div className="collapse collapse-plus bg-pink-200 mb-4 text-black">
                        <input type="radio" name="my-accordion-3" />
                        <div className="collapse-title text-xl font-medium">
                        Can I join multiple study groups?
                        </div>
                        <div className="collapse-content bg-pink-400">
                            <p>Yes, you can join multiple study groups based on your interests and academic needs. Simply browse through the available groups and join those that align with your goals.</p>
                        </div>
                    </div>

                    <div className="collapse collapse-plus mb-4 bg-pink-200 text-black">
                        <input type="radio" name="my-accordion-3" />
                        <div className="collapse-title text-xl font-medium">
                        What tools are available for communication within study groups?
                        </div>
                        <div className="collapse-content bg-pink-400">
                            <p>Our platform provides various communication tools within study groups, including discussion boards, chat rooms, video conferencing, file sharing, and scheduling tools. These features enable seamless collaboration and interaction among group members.</p>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    );
};

export default FAQ;