function showMember(member) {
    const activeMember = document.querySelector('.team-member.active');
    activeMember.classList.remove('active');
    const newActiveMember = document.querySelector(`#member${member}`);
    newActiveMember.classList.add('active');
    updateTeamMember(newActiveMember);
    prevMember = member;
  }
  
  function updateTeamMember(member) {
    const nameElement = member.querySelector('.name');
    const imageElement = member.querySelector('.image');
    const imageName = member.id === 'member1' ? 'sen.JPG' : 'jeet.jpg';
    nameElement.innerHTML = nameElement.innerHTML;
    imageElement.src = `./images/${imageName}`;
  }

  function showMember(member) {
    const activeMember = document.querySelector('.team-member.active');
    activeMember.classList.remove('active');
    const newActiveMember = document.querySelector(`#member${member}`);
    newActiveMember.classList.add('active');
    updateTeamMember(newActiveMember);
    
    const activeButton = document.querySelector('.nav button.active');
    activeButton.classList.remove('active');
    const newActiveButton = document.querySelector(`.nav button:nth-child(${member})`);
    newActiveButton.classList.add('active');
  }


  window.onload = function() {
    document.querySelector('.nav button:nth-child(1)').classList.add('active');
}
