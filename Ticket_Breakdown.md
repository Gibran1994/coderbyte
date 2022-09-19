# Ticket Breakdown
We are a staffing company whose primary purpose is to book Agents at Shifts posted by Facilities on our platform. We're working on a new feature which will generate reports for our client Facilities containing info on how many hours each Agent worked in a given quarter by summing up every Shift they worked. Currently, this is how the process works:

- Data is saved in the database in the Facilities, Agents, and Shifts tables
- A function `getShiftsByFacility` is called with the Facility's id, returning all Shifts worked that quarter, including some metadata about the Agent assigned to each
- A function `generateReport` is then called with the list of Shifts. It converts them into a PDF which can be submitted by the Facility for compliance.

## You've been asked to work on a ticket. It reads:

**Currently, the id of each Agent on the reports we generate is their internal database id. We'd like to add the ability for Facilities to save their own custom ids for each Agent they work with and use that id when generating reports for them.**


Based on the information given, break this ticket down into 2-5 individual tickets to perform. Provide as much detail for each ticket as you can, including acceptance criteria, time/effort estimates, and implementation details. Feel free to make informed guesses about any unknown details - you can't guess "wrong".


You will be graded on the level of detail in each ticket, the clarity of the execution plan within and between tickets, and the intelligibility of your language. You don't need to be a native English speaker, but please proof-read your work.

## Your Breakdown Here

We breakdown the solution here in 2 tickets where 1 is for the UI and Front end changes and 1 is for the backend changes

1. UI and Front End:
        Here, the UI and Front end change is that when the agent creation is done, we need to send an additional parameter along with the API request that contains the agent data (Preferrably combination of first name and numeric ID where the numeric can be mobile number which is always unique). Upon duplication, the duplicate entry response will be returned from the backend which should be handled appropriately (preferrably as an alert box or similar)

        This ticekt will have 2 story points. The first one being for creation of agent as explained above. The other one will be to display the given unique agent id instead of the auto generated ID from the database. 

2. Backend :
        Here, we have to modify the APIs and models along with the database. So the ticket can have 2 story points.
        The first is we need to update the database (for RDBMS) or the Model (for NoSQL) and create condition that the new field of the custom agent ID must consist of unique data

        The second is the API change where the given agent ID is added along with the agent creation request. Here an additional validation handling is required when there's duplicaiton found in the agent id field. ANd while returning the filtered Agent data in the response, we need to add the new field of custom agent ID as well.

The time required for these two tickets can be divided in terms of development and regression testing. The planning (including LLD and HLD) should not take more than a day and the solution implementation also shouldn't take more than a day per ticket. A day can be given for writing the UTs and FTs. Following this, we have to run the regression tests against the updated code to check nothing breaks. Once approval is received by code owner reviewer, we can request for production release.

