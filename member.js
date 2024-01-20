function SkillsMember() {
    this.name = 'John Doe';
    this.age = 25;
    this.address = 'New York';
    this.skills = ['JavaScript', 'React', 'Node', 'MongoDB'];
    this.getSkills = function() {
        return this.skills;
    }
}