# the LOOP (decentralized social media app)
Contributors to this project are Rohan Gupta, Trevor Asbery, Nic Buxbaum, and Isaac Wahout.

As of 2/6/2022, there are three separate parts that have yet to be integrated together: the frontend, the smart contract, and the machine learning algorithm. The smart contract is written in Solidity and we are working on integrating that into our Javascript-based frontend. The functions performed by the smart contract involve rewarding users with ETH every time they sell their data to other organizations. These other organizations can be advertisers or companies just interested in data. The machine learning algorithm is supposed to recommend specific number of users to organizations who want their data — to advertise to, to gather analytics, etc. — based on how much each user is interested in the company's offerings. 

Next tasks:
- integrate smart contract into Ionic app
- set up server that can serve the machine learning algorithm's outputs to the app
