//  // Function to generate team members HTML
//  function generateTeamHTML() {
//     const teamSection = document.getElementById("team");
//     // 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

//     teamMembers.forEach(member => {
//         const memberLi = document.createElement("li");
//         memberLi.className = "team-member";
//         memberLi.innerHTML = `
//             <div class="pricing-card">

//                 <figure class="card-banner img-holder" style="--width: 90; --height: 90;">
//                     <img src="${member.image}" width="90" height="90" alt="Hair Cutting & Fitting"
//                     class="img-cover">
//                 </figure>

//                 <div class="wrapper">
//                     <h3 class="h3 card-title">${member.name}</h3>

//                     <p class="card-text">In the ${member.specialization} ${member.name} has ${member.experience} of experience. </p>
//                 </div>

//             </div>    
//         `;
//         teamSection.appendChild(memberLi);
//     });
// }

//             generateTeamHTML();