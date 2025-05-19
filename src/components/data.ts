export type PointEntry = {
  status: "Done" | "Blocked" | "Planned";
  client: "Client A" | "Client B";
  points: number;
  point_type: "Prepaid" | "Retainer";
  card_description: string;
  month: string;
  year: string;
};

export const pointEntries: PointEntry[] = [
  {

    "status": "Blocked",
    "client": "Client A",
    "points": 10,
    "point_type": "Prepaid",
    "card_description": "Initial planning",
    "month": "October",
    "year": "2025"

  },
  {

    "status": "Done",
    "client": "Client B",
    "points": 8,
    "point_type": "Retainer",
    "card_description": "Kickoff meeting done",
    "month": "October",
    "year": "2025"

  },
  {

    "status": "Done",
    "client": "Client D",
    "points": 1,
    "point_type": "Retainer",
    "card_description": "Backlog refinement",
    "month": "September",
    "year": "2023"

  },
  {

    "status": "Planned",
    "client": "Client B",
    "points": 7,
    "point_type": "Retainer",
    "card_description": "Deployment scheduled",
    "month": "November",
    "year": "2025"

  },
  {

    "status": "Blocked",
    "client": "Client A",
    "points": 6,
    "point_type": "Retainer",
    "card_description": "User stories added",
    "month": "July",
    "year": "2023"

  },
  {

    "status": "Planned",
    "client": "Client A",
    "points": 3,
    "point_type": "Retainer",
    "card_description": "Docs updated",
    "month": "February",
    "year": "2023"

  },
  {

    "status": "Done",
    "client": "Client B",
    "points": 7,
    "point_type": "Retainer",
    "card_description": "Docs updated",
    "month": "August",
    "year": "2024"

  },
  {

    "status": "Done",
    "client": "Client A",
    "points": 4,
    "point_type": "Prepaid",
    "card_description": "Waiting on input",
    "month": "November",
    "year": "2025"

  },
  {

    "status": "Blocked",
    "client": "Client B",
    "points": 2,
    "point_type": "Retainer",
    "card_description": "Sprint review",
    "month": "February",
    "year": "2025"

  },
  {

    "status": "Done",
    "client": "Client C",
    "points": 3,
    "point_type": "Retainer",
    "card_description": "Dev cycle closed",
    "month": "December",
    "year": "2025"

  },
  {

    "status": "Planned",
    "client": "Client B",
    "points": 10,
    "point_type": "Prepaid",
    "card_description": "Sprint review",
    "month": "February",
    "year": "2024"

  },
  {

    "status": "Planned",
    "client": "Client D",
    "points": 4,
    "point_type": "Retainer",
    "card_description": "Backlog refinement",
    "month": "April",
    "year": "2025"

  },
  {

    "status": "Done",
    "client": "Client A",
    "points": 1,
    "point_type": "Retainer",
    "card_description": "Dev cycle closed",
    "month": "September",
    "year": "2023"

  },
  {

    "status": "Blocked",
    "client": "Client C",
    "points": 2,
    "point_type": "Prepaid",
    "card_description": "Initial planning",
    "month": "December",
    "year": "2024"

  },
  {

    "status": "Done",
    "client": "Client C",
    "points": 2,
    "point_type": "Prepaid",
    "card_description": "Hotfix released",
    "month": "May",
    "year": "2024"

  },
  {

    "status": "Done",
    "client": "Client D",
    "points": 2,
    "point_type": "Retainer",
    "card_description": "Waiting on input",
    "month": "May",
    "year": "2023"

  },
  {

    "status": "Done",
    "client": "Client D",
    "points": 9,
    "point_type": "Retainer",
    "card_description": "Launch successful",
    "month": "December",
    "year": "2024"

  },
  {

    "status": "Done",
    "client": "Client A",
    "points": 6,
    "point_type": "Retainer",
    "card_description": "User stories added",
    "month": "June",
    "year": "2024"

  },
  {

    "status": "Planned",
    "client": "Client B",
    "points": 7,
    "point_type": "Retainer",
    "card_description": "Docs updated",
    "month": "May",
    "year": "2025"

  },
  {

    "status": "Done",
    "client": "Client B",
    "points": 10,
    "point_type": "Prepaid",
    "card_description": "Sprint review",
    "month": "August",
    "year": "2023"

  },
  {

    "status": "Blocked",
    "client": "Client B",
    "points": 5,
    "point_type": "Prepaid",
    "card_description": "Docs updated",
    "month": "September",
    "year": "2025"

  },
  {

    "status": "Blocked",
    "client": "Client D",
    "points": 4,
    "point_type": "Retainer",
    "card_description": "Hotfix released",
    "month": "June",
    "year": "2023"

  },
  {

    "status": "Blocked",
    "client": "Client C",
    "points": 8,
    "point_type": "Prepaid",
    "card_description": "Waiting on input",
    "month": "October",
    "year": "2023"

  },
  {

    "status": "Done",
    "client": "Client B",
    "points": 4,
    "point_type": "Prepaid",
    "card_description": "Code review passed",
    "month": "November",
    "year": "2024"

  },
  {

    "status": "Planned",
    "client": "Client D",
    "points": 7,
    "point_type": "Retainer",
    "card_description": "Integration complete",
    "month": "August",
    "year": "2023"

  },
  {

    "status": "Planned",
    "client": "Client C",
    "points": 2,
    "point_type": "Retainer",
    "card_description": "Waiting on input",
    "month": "October",
    "year": "2024"

  },
  {

    "status": "Planned",
    "client": "Client D",
    "points": 9,
    "point_type": "Prepaid",
    "card_description": "Hotfix released",
    "month": "January",
    "year": "2024"

  },
  {

    "status": "Done",
    "client": "Client C",
    "points": 5,
    "point_type": "Retainer",
    "card_description": "Completed setup",
    "month": "June",
    "year": "2025"

  },
  {

    "status": "Planned",
    "client": "Client B",
    "points": 6,
    "point_type": "Prepaid",
    "card_description": "Hotfix released",
    "month": "September",
    "year": "2024"

  },
  {

    "status": "Blocked",
    "client": "Client C",
    "points": 8,
    "point_type": "Retainer",
    "card_description": "Design review",
    "month": "January",
    "year": "2023"

  },
  {

    "status": "Blocked",
    "client": "Client D",
    "points": 6,
    "point_type": "Prepaid",
    "card_description": "Client approval pending",
    "month": "April",
    "year": "2023"

  },
  {

    "status": "Blocked",
    "client": "Client D",
    "points": 10,
    "point_type": "Prepaid",
    "card_description": "Docs updated",
    "month": "July",
    "year": "2025"

  },
  {

    "status": "Planned",
    "client": "Client B",
    "points": 1,
    "point_type": "Prepaid",
    "card_description": "Hotfix released",
    "month": "March",
    "year": "2024"

  },
  {

    "status": "Planned",
    "client": "Client B",
    "points": 4,
    "point_type": "Retainer",
    "card_description": "Kickoff meeting done",
    "month": "December",
    "year": "2025"

  },
  {

    "status": "Done",
    "client": "Client C",
    "points": 7,
    "point_type": "Prepaid",
    "card_description": "Hotfix released",
    "month": "August",
    "year": "2025"

  },
  {

    "status": "Planned",
    "client": "Client D",
    "points": 5,
    "point_type": "Prepaid",
    "card_description": "Issue with deployment",
    "month": "December",
    "year": "2025"

  },
  {

    "status": "Done",
    "client": "Client D",
    "points": 5,
    "point_type": "Prepaid",
    "card_description": "Sprint review",
    "month": "May",
    "year": "2025"

  },
  {

    "status": "Blocked",
    "client": "Client B",
    "points": 4,
    "point_type": "Retainer",
    "card_description": "Design review",
    "month": "July",
    "year": "2025"

  },
  {

    "status": "Done",
    "client": "Client A",
    "points": 8,
    "point_type": "Prepaid",
    "card_description": "Sprint review",
    "month": "February",
    "year": "2025"

  },
  {

    "status": "Done",
    "client": "Client D",
    "points": 6,
    "point_type": "Prepaid",
    "card_description": "Client approval pending",
    "month": "August",
    "year": "2024"

  },
  {

    "status": "Planned",
    "client": "Client D",
    "points": 5,
    "point_type": "Prepaid",
    "card_description": "Sprint review",
    "month": "November",
    "year": "2023"

  },
  {

    "status": "Done",
    "client": "Client B",
    "points": 4,
    "point_type": "Retainer",
    "card_description": "Kickoff meeting done",
    "month": "August",
    "year": "2025"

  },
  {

    "status": "Planned",
    "client": "Client B",
    "points": 5,
    "point_type": "Prepaid",
    "card_description": "Milestone reached",
    "month": "February",
    "year": "2023"

  },
  {

    "status": "Done",
    "client": "Client D",
    "points": 7,
    "point_type": "Retainer",
    "card_description": "Initial planning",
    "month": "September",
    "year": "2024"

  },
  {

    "status": "Planned",
    "client": "Client B",
    "points": 3,
    "point_type": "Prepaid",
    "card_description": "Waiting on input",
    "month": "October",
    "year": "2024"

  },
  {

    "status": "Planned",
    "client": "Client C",
    "points": 9,
    "point_type": "Prepaid",
    "card_description": "Milestone reached",
    "month": "November",
    "year": "2025"

  },
  {

    "status": "Done",
    "client": "Client C",
    "points": 5,
    "point_type": "Prepaid",
    "card_description": "Client approval pending",
    "month": "April",
    "year": "2024"

  },
  {

    "status": "Blocked",
    "client": "Client A",
    "points": 3,
    "point_type": "Prepaid",
    "card_description": "Kickoff meeting done",
    "month": "April",
    "year": "2025"

  },
  {

    "status": "Done",
    "client": "Client D",
    "points": 2,
    "point_type": "Retainer",
    "card_description": "Design review",
    "month": "April",
    "year": "2025"

  },
  {

    "status": "Done",
    "client": "Client C",
    "points": 2,
    "point_type": "Retainer",
    "card_description": "Hotfix released",
    "month": "October",
    "year": "2025"

  },
  {

    "status": "Blocked",
    "client": "Client A",
    "points": 9,
    "point_type": "Retainer",
    "card_description": "Waiting on input",
    "month": "January",
    "year": "2025"

  },
  {

    "status": "Done",
    "client": "Client B",
    "points": 1,
    "point_type": "Prepaid",
    "card_description": "Resources allocated",
    "month": "December",
    "year": "2023"

  },
  {

    "status": "Blocked",
    "client": "Client B",
    "points": 2,
    "point_type": "Prepaid",
    "card_description": "Code review passed",
    "month": "May",
    "year": "2024"

  },
  {

    "status": "Done",
    "client": "Client C",
    "points": 3,
    "point_type": "Prepaid",
    "card_description": "Docs updated",
    "month": "June",
    "year": "2023"

  },
  {

    "status": "Planned",
    "client": "Client B",
    "points": 3,
    "point_type": "Prepaid",
    "card_description": "Integration complete",
    "month": "October",
    "year": "2023"

  },
  {

    "status": "Done",
    "client": "Client D",
    "points": 5,
    "point_type": "Retainer",
    "card_description": "Waiting on input",
    "month": "January",
    "year": "2023"

  },
  {

    "status": "Done",
    "client": "Client B",
    "points": 4,
    "point_type": "Retainer",
    "card_description": "Initial planning",
    "month": "September",
    "year": "2025"

  },
  {

    "status": "Done",
    "client": "Client B",
    "points": 7,
    "point_type": "Retainer",
    "card_description": "Backlog refinement",
    "month": "February",
    "year": "2023"

  },
  {

    "status": "Planned",
    "client": "Client C",
    "points": 1,
    "point_type": "Retainer",
    "card_description": "Deployment scheduled",
    "month": "April",
    "year": "2023"

  },
  {

    "status": "Done",
    "client": "Client D",
    "points": 1,
    "point_type": "Retainer",
    "card_description": "Backlog refinement",
    "month": "July",
    "year": "2024"

  },
  {

    "status": "Done",
    "client": "Client A",
    "points": 1,
    "point_type": "Retainer",
    "card_description": "Deployment scheduled",
    "month": "January",
    "year": "2024"

  },
  {

    "status": "Planned",
    "client": "Client A",
    "points": 2,
    "point_type": "Retainer",
    "card_description": "QA testing",
    "month": "May",
    "year": "2023"

  },
  {

    "status": "Done",
    "client": "Client A",
    "points": 6,
    "point_type": "Retainer",
    "card_description": "Launch successful",
    "month": "November",
    "year": "2024"

  },
  {

    "status": "Planned",
    "client": "Client D",
    "points": 6,
    "point_type": "Retainer",
    "card_description": "Launch successful",
    "month": "October",
    "year": "2023"

  },
  {

    "status": "Done",
    "client": "Client C",
    "points": 7,
    "point_type": "Retainer",
    "card_description": "Integration complete",
    "month": "March",
    "year": "2024"

  },
  {

    "status": "Planned",
    "client": "Client A",
    "points": 9,
    "point_type": "Prepaid",
    "card_description": "Sprint review",
    "month": "November",
    "year": "2024"

  },
  {

    "status": "Done",
    "client": "Client C",
    "points": 6,
    "point_type": "Prepaid",
    "card_description": "Initial planning",
    "month": "October",
    "year": "2024"

  },
  {

    "status": "Blocked",
    "client": "Client A",
    "points": 10,
    "point_type": "Retainer",
    "card_description": "QA testing",
    "month": "November",
    "year": "2023"

  },
  {

    "status": "Planned",
    "client": "Client C",
    "points": 6,
    "point_type": "Retainer",
    "card_description": "Resources allocated",
    "month": "February",
    "year": "2024"

  },
  {

    "status": "Blocked",
    "client": "Client A",
    "points": 9,
    "point_type": "Prepaid",
    "card_description": "Milestone reached",
    "month": "August",
    "year": "2024"

  },
  {

    "status": "Blocked",
    "client": "Client A",
    "points": 7,
    "point_type": "Retainer",
    "card_description": "Client approval pending",
    "month": "June",
    "year": "2024"

  },
  {

    "status": "Done",
    "client": "Client D",
    "points": 1,
    "point_type": "Prepaid",
    "card_description": "Kickoff meeting done",
    "month": "July",
    "year": "2024"

  },
  {

    "status": "Blocked",
    "client": "Client D",
    "points": 10,
    "point_type": "Retainer",
    "card_description": "User stories added",
    "month": "January",
    "year": "2025"

  },
  {

    "status": "Planned",
    "client": "Client C",
    "points": 9,
    "point_type": "Retainer",
    "card_description": "Resources allocated",
    "month": "May",
    "year": "2025"

  },
  {

    "status": "Blocked",
    "client": "Client A",
    "points": 6,
    "point_type": "Prepaid",
    "card_description": "Issue with deployment",
    "month": "January",
    "year": "2023"

  },
  {

    "status": "Blocked",
    "client": "Client A",
    "points": 3,
    "point_type": "Prepaid",
    "card_description": "Initial planning",
    "month": "May",
    "year": "2024"

  },
  {

    "status": "Planned",
    "client": "Client D",
    "points": 8,
    "point_type": "Prepaid",
    "card_description": "Launch successful",
    "month": "April",
    "year": "2023"

  },
  {

    "status": "Planned",
    "client": "Client C",
    "points": 8,
    "point_type": "Retainer",
    "card_description": "Design review",
    "month": "July",
    "year": "2023"

  },
  {

    "status": "Done",
    "client": "Client C",
    "points": 8,
    "point_type": "Prepaid",
    "card_description": "Integration complete",
    "month": "March",
    "year": "2023"

  },
  {

    "status": "Blocked",
    "client": "Client B",
    "points": 2,
    "point_type": "Prepaid",
    "card_description": "Milestone reached",
    "month": "March",
    "year": "2025"

  },
  {

    "status": "Blocked",
    "client": "Client C",
    "points": 1,
    "point_type": "Prepaid",
    "card_description": "Integration complete",
    "month": "December",
    "year": "2023"

  },
  {

    "status": "Planned",
    "client": "Client C",
    "points": 10,
    "point_type": "Prepaid",
    "card_description": "Kickoff meeting done",
    "month": "March",
    "year": "2023"

  },
  {

    "status": "Planned",
    "client": "Client D",
    "points": 6,
    "point_type": "Retainer",
    "card_description": "Client approval pending",
    "month": "July",
    "year": "2024"

  },
  {

    "status": "Blocked",
    "client": "Client C",
    "points": 10,
    "point_type": "Retainer",
    "card_description": "Code review passed",
    "month": "January",
    "year": "2024"

  },
  {

    "status": "Blocked",
    "client": "Client B",
    "points": 10,
    "point_type": "Prepaid",
    "card_description": "Hotfix released",
    "month": "March",
    "year": "2025"

  },
  {

    "status": "Blocked",
    "client": "Client D",
    "points": 3,
    "point_type": "Retainer",
    "card_description": "Dev cycle closed",
    "month": "July",
    "year": "2023"

  },
  {

    "status": "Blocked",
    "client": "Client D",
    "points": 4,
    "point_type": "Prepaid",
    "card_description": "Deployment scheduled",
    "month": "May",
    "year": "2023"

  },
  {

    "status": "Planned",
    "client": "Client A",
    "points": 8,
    "point_type": "Retainer",
    "card_description": "Completed setup",
    "month": "March",
    "year": "2024"

  },
  {

    "status": "Planned",
    "client": "Client C",
    "points": 5,
    "point_type": "Retainer",
    "card_description": "Dev cycle closed",
    "month": "June",
    "year": "2023"

  },
  {

    "status": "Planned",
    "client": "Client A",
    "points": 4,
    "point_type": "Retainer",
    "card_description": "Dev cycle closed",
    "month": "August",
    "year": "2025"

  },
  {

    "status": "Done",
    "client": "Client B",
    "points": 4,
    "point_type": "Prepaid",
    "card_description": "Deployment scheduled",
    "month": "June",
    "year": "2025"

  },
  {

    "status": "Blocked",
    "client": "Client C",
    "points": 8,
    "point_type": "Prepaid",
    "card_description": "Issue with deployment",
    "month": "September",
    "year": "2023"

  },
  {

    "status": "Done",
    "client": "Client B",
    "points": 7,
    "point_type": "Retainer",
    "card_description": "Code review passed",
    "month": "July",
    "year": "2025"

  },
  {

    "status": "Planned",
    "client": "Client D",
    "points": 7,
    "point_type": "Prepaid",
    "card_description": "QA testing",
    "month": "December",
    "year": "2023"

  },
  {

    "status": "Blocked",
    "client": "Client D",
    "points": 8,
    "point_type": "Prepaid",
    "card_description": "User stories added",
    "month": "May",
    "year": "2025"

  },
  {

    "status": "Blocked",
    "client": "Client D",
    "points": 5,
    "point_type": "Retainer",
    "card_description": "Kickoff meeting done",
    "month": "June",
    "year": "2024"

  },
  {

    "status": "Planned",
    "client": "Client B",
    "points": 6,
    "point_type": "Prepaid",
    "card_description": "Client approval pending",
    "month": "January",
    "year": "2025"

  },
  {

    "status": "Done",
    "client": "Client A",
    "points": 10,
    "point_type": "Prepaid",
    "card_description": "Initial planning",
    "month": "August",
    "year": "2023"

  },
  {

    "status": "Done",
    "client": "Client A",
    "points": 7,
    "point_type": "Retainer",
    "card_description": "Waiting on input",
    "month": "September",
    "year": "2025"

  },
  {

    "status": "Blocked",
    "client": "Client D",
    "points": 7,
    "point_type": "Retainer",
    "card_description": "Milestone reached",
    "month": "February",
    "year": "2025"

  }
];
