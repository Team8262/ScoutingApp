export default [
    {question: "Team Number", type: "free_selection", options: [], label: "team_number"},
    {question: "Drivetrain Type", type: "multiple_choice", label: "drivetrain", options: ["WCD (Kit)", "WCD (Custom)", "Swerve", "Omni", "H-Drive", "2 + 2 Omni and Traction", "Other..."]},
    {question: "Robot Weight (AS INSPECTED)", type: "short_answer", label: "weight"},
    {question: "Approximate Length of Bumpers (ft)", label:"bumper", type: "short_answer"},
    {question: "What is your primary fastener?", type: "checkboxes", label: "fastener", options: ["Bolts", "Welds", "Rivets", "Zipties", "Prayers"]},
    {question: "How much time spent on the robot cart?", type: "short_answer", label: "cart_time"},
    {question: "Programming Language", type: "multiple_choice", label: "language", options: ["Java", "Python", "C++", "LabView", "Other..."]},
]