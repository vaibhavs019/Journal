import React from 'react'
import obs from "./obstacleavoiding.png"

export default function Exp10(props) {
  return (
    <div>
        <h2 className={`text-${props.mode==="dark"?"light":"dark"}`}>Experiment-10</h2>
        <div className='container my-4'/>
        <h3 className={`text-${props.mode==="dark"?"light":"dark"}`}>To understand the basic of obstacle avoiding control schemes</h3>
        <div className='container my-4'/>
        <h4 className={`text-${props.mode==="dark"?"light":"dark"}`}>Introduction</h4>
        <p className={`text-${props.mode==="dark"?"light":"dark"}`} text-align={`justify`}>Obstacle avoidance schemes refer to the set of techniques and algorithms used by robots to detect and avoid obstacles in their environment. These schemes enable robots to navigate autonomously in complex environments without human intervention.
            Obstacle avoidance schemes typically involve the use of various sensors such as cameras, lidar, radar, or sonar to detect obstacles in the environment. The data from these sensors is then processed by algorithms that enable the robot to identify the position, size, and type of obstacle.
            The robot can then use this information to generate a trajectory that avoids the obstacle and moves towards its intended destination. This trajectory planning is usually done using algorithms such as potential fields, artificial neural networks, or fuzzy logic.
            The obstacle avoidance schemes can vary depending on the type of robot and the environment in which it operates.
        </p>

        <img src={obs} className={`d-block mx-auto`} width={`800px`} alt={`...`}/>
        <figcaption className={`text-${props.mode==="dark"?"light":"dark"}`} align={`center`}>Fig: Block diagram for vision based obstacle avoiding robot</figcaption>

        <h4 className={`text-${props.mode==="dark"?"light":"dark"}`}>Methods of obstacle avoidance</h4>
        <h5 className={`text-${props.mode==="dark"?"light":"dark"}`}>For drones</h5>
        <p className={`text-${props.mode==="dark"?"light":"dark"}`}><ol>
            <li><strong>Vision-based:</strong> The drone employs cameras and computer vision algorithms in this method to identify objects in its route. The algorithm analyses the photos after the camera takes pictures of the environment in order to spot obstacles and determine their position in relation to the drone.</li>
            <li><strong>LiDAR-based:</strong> LiDAR (Light Detection and Ranging) is a technology that measures the distances between objects using laser light. Drones can be equipped with LiDAR sensors to detect obstacles and provide a 3D map of the surrounding area.</li>
            <li><strong>Ultrasonic based:</strong> By emitted sound waves and measuring the time for the waves to bounce back, ultrasonic sensors can be used to identify obstructions. Common drone applications at low altitudes use these sensors.</li>
            <li><strong>Based on infrared technology:</strong> Infrared sensors operate in a manner akin to ultrasonic sensors by generating infrared light and timing how long it takes for the light to return. Most drone applications indoors employ these sensors.</li>
            <li><strong>GPS-based:</strong>By erecting a virtual fence around the drone's flight path, GPS (Global Positioning System) can be utilized to detect impediments. The drone will inform the operator if it approaches an obstruction too closely.</li>
        </ol></p>

        <h5 className={`text-${props.mode==="dark"?"light":"dark"}`}>For wheeled robot </h5>
        <p className={`text-${props.mode==="dark"?"light":"dark"}`}>
            <ol>
                <li><strong>Reactive Navigation:</strong> This method uses real-time sensor data to immediately adjust the robot's path to avoid obstacles. It does not require a map of the environment but is limited to short-term planning.</li>
                <li><strong>Sensor technologies:</strong> Various types of sensors are used to detect obstacles, such as LiDAR, sonar, and cameras.</li>
                <li><strong>Localization and mapping:</strong> Accurate localization and mapping of the robot's environment are crucial for effective obstacle
                    avoidance.</li>
                <li><strong>Potential Fields:</strong> This method creates a virtual potential field around obstacles, with a repulsive force that pushes the robot away from obstacles and an attractive force that pulls the robot towards its goal.</li>
                <li><strong>Probabilistic Roadmap:</strong> This method uses a pre-built map of the environment to plan a safe path around obstacles. It also considers the uncertainty of the robot's position and sensors, resulting in a probabilistic path.</li>
                <li><strong>Machine Learning:</strong> This method involves training algorithms to recognize obstacles and to navigate around them efficiently. It can result in more intelligent and adaptive obstacle avoidance but requires large amounts of training data.</li>
                <li><strong>Hybrid Methods:</strong> These methods combine two or more of the above methods to create a more robust obstacle avoidance system that can handle various situations and environments.</li>
            </ol>
        </p>
        <h4 className={`text-${props.mode==="dark"?"light":"dark"}`}>Applications</h4>
        <p className={`text-${props.mode==="dark"?"light":"dark"}`}>Obstacle avoidance is a crucial feature for drones and wheeled robots as it helps them navigate through complex environments and avoid collisions. </p>
        <p className={`text-${props.mode==="dark"?"light":"dark"}`}>Here are some examples of how obstacle avoidance is used in drones:
        <ol>
            <li>Drones are often used for inspecting structures like buildings, bridges, and power lines. Obstacle avoidance helps the drone navigate around obstacles and capture high-resolution images and videos of the structure.</li>
            <li>In search and rescue operations, drones can be used to locate missing persons in hard-to-reach areas. Obstacle avoidance allows the drone to navigate through dense forests, over rough terrain, and around obstacles to find the missing person.</li>
            <li>Delivery drones are becoming increasingly popular, and obstacle avoidance is a critical feature for their safe operation. The drone needs to avoid obstacles like trees, buildings, and power lines while delivering packages to the recipient's doorstep.</li>
            <li>Drones are used in agriculture to survey crops and monitor their health. Obstacle avoidance helps the drone navigate around obstacles like trees, fences, and power lines while surveying the fields.</li>
            <li>Drones are used extensively in the film industry to capture aerial shots. Obstacle avoidance helps the drone navigate through complex environments and capture stunning footage without colliding with objects in its path.</li>
        </ol></p>

        <p className={`text-${props.mode==="dark"?"light":"dark"}`}>Here are some examples of how obstacle avoidance is used in wheeled robots:
        <ol>
            <li><strong>Autonomous Navigation:</strong> Wheeled robots with obstacle avoidance systems can navigate autonomously in complex environments without human intervention. These robots are used in various applications, such as automated guided vehicles (AGVs) in factories, logistics, and warehouses.</li>
            <li><strong>Security and Surveillance:</strong> Wheeled robots equipped with obstacle avoidance sensors can be used for security and surveillance purposes. These robots can be used to patrol areas and detect intruders or suspicious activities.</li>
            <li><strong>Search and Rescue:</strong> Wheeled robots with obstacle avoidance capabilities can be used in search and rescue missions. These robots can navigate through rubble and other obstacles to locate survivors and provide information to rescue teams.</li>
            <li><strong>Agricultural Robotics:</strong> Wheeled robots equipped with obstacle avoidance sensors can be used in agriculture for tasks such as crop monitoring, irrigation, and fertilization. These robots can navigate through crops without damaging them and avoid obstacles such as trees and rocks.</li>
            <li><strong> Healthcare:</strong> Wheeled robots with obstacle avoidance sensors can be used in healthcare for tasks such as delivery of medicines and supplies in hospitals and eldercare facilities. These robots can navigate through corridors and avoid obstacles such as furniture and people.</li>
        </ol></p>




        <h4 className={`text-${props.mode==="dark"?"light":"dark"}`}>Advantages:</h4>

        <p className={`text-${props.mode==="dark"?"light":"dark"}`}>
            <ol>
                <li>  Increased Safety: Obstacle avoidance robots are equipped with sensors that allow them to detect obstacles in their path and avoid
                    collisions. This helps prevent accidents and injuries caused by collisions with people or objects in the warehouse, enhancing overall
                    safety in the workplace.</li>
                <li>        Improved Efficiency: Obstacle avoidance robots can navigate through the warehouse environment autonomously, without the need for
                    human intervention. They can move swiftly and efficiently, avoiding obstacles and finding the most optimal paths to their destinations.
                    This can result in improved productivity and reduced downtime, as they can work 24/7 without breaks.
                </li>
                <li>  Cost-effective: Implementing obstacle avoidance robots in warehouses can lead to cost savings in the long run. By reducing the risk of
                    accidents and damages caused by collisions, businesses can avoid costly repairs, replacements, and insurance claims. Additionally,
                    these robots can optimize warehouse operations by minimizing idle time and maximizing the utilization of available space, leading to
                    better inventory management and reduced operational costs.</li>
                <li>        Flexibility: Obstacle avoidance robots are highly adaptable and can be programmed to perform a variety of tasks, such as material
                    handling, inventory management, and order fulfillment. They can easily navigate around different types of obstacles, including pallets,
                    racks, and other machinery, making them suitable for different warehouse environments and workflows. They can also be integrated
                    with existing warehouse management systems, providing seamless coordination and communication with other warehouse operations.
                </li>
                <li>        Scalability: Obstacle avoidance robots can be easily scaled up or down based on the needs of the warehouse. As businesses grow or
                    change, these robots can be deployed in different areas of the warehouse, reprogrammed for new tasks, or even integrated with other
                    robotic systems. This makes them a flexible solution that can adapt to changing warehouse requirements over time.
                </li>
                <li>  Enhanced Accuracy: Obstacle avoidance robots are equipped with advanced sensors and algorithms that enable precise navigation
                    and positioning. This can result in higher accuracy in material handling and inventory management tasks, reducing errors and improving
                    overall warehouse operations.</li>
            </ol>
        </p>

        <h4 className={`text-${props.mode==="dark"?"light":"dark"}`}>Disadvantages</h4>
        <p className={`text-${props.mode==="dark"?"light":"dark"}`}>
            <ol>
                <li>Initial Investment: Implementing obstacle avoidance robots in a warehouse typically requires a significant initial investment. The cost of
                    purchasing or leasing the robots, along with any necessary infrastructure, such as charging stations or navigation markers, can be
                    substantial. This may pose a financial challenge for small or budget-constrained businesses.</li>
                <li> Maintenance and Upkeep: Obstacle avoidance robots require regular maintenance, including software updates, sensor calibration, and
                    mechanical repairs. This adds to the ongoing operational costs and may require specialized technical expertise, which could be an
                    additional burden for businesses.</li>
                <li>Training and Workforce Impact: Introducing obstacle avoidance robots into a warehouse may require training for the existing workforce
                    to operate and interact with the robots effectively. Some employees may require reskilling or upskilling, and there may be concerns
                    about potential job displacement or changes to job roles. Managing workforce transitions and ensuring smooth integration of robots
                    into the existing workforce may require careful planning and communication.</li>
                <li> Limitations in Complex Environments: While obstacle avoidance robots are designed to navigate around obstacles, they may face
                    challenges in complex or dynamic environments. For example, highly cluttered or crowded areas, irregularly shaped objects, or
                    changing warehouse layouts may pose difficulties for the robots in accurately detecting and avoiding obstacles, which may impact their
                    performance.</li>
                <li>Technology Limitations: Obstacle avoidance robots rely on sensors, algorithms, and other technologies, which may have limitations. For
                    example, sensor accuracy, range, and reliability may affect the robot's ability to avoid obstacles effectively. Additionally, some
                    environments, such as those with reflective surfaces or electromagnetic interference, may pose challenges to the sensors'
                    performance.</li>
            </ol>
        </p>





















    </div>
  )
}
