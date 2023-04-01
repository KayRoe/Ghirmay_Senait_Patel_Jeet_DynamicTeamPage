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