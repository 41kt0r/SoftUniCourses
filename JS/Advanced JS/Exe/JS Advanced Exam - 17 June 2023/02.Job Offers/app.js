class JobOffers {
    constructor(employer, position) {
        this.employer = employer;
        this.position = position;
        this.jobCandidates = [];
    }

    jobApplication(candidates) {
        candidates.forEach(candidate => {
            const [name, education, yearsExperience] = candidate.split('-');
            const years = Number(yearsExperience);
            const existingCandidate = this.jobCandidates.find(c => c.name === name);
            if (existingCandidate) {
                if (existingCandidate.yearsExperience < years) {
                    existingCandidate.yearsExperience = years;
                }
            } else {
                this.jobCandidates.push({ name, education, yearsExperience: years });
            }
        });
        const names = this.jobCandidates.map(candidate => candidate.name).join(', ');
        return `You successfully added candidates: ${names}.`;
    }

    jobOffer(chosenPerson) {
        const [name, minimalExperience] = chosenPerson.split('-');
        const candidate = this.jobCandidates.find(c => c.name === name);
        if (!candidate) {
            throw new Error(`${name} is not in the candidates list!`);
        }
        if (Number(minimalExperience) > candidate.yearsExperience) {
            throw new Error(`${name} does not have enough experience as ${this.position}, minimum requirement is ${minimalExperience} years.`);
        }
        candidate.yearsExperience = 'hired';
        return `Welcome aboard, our newest employee is ${name}.`;
    }

    salaryBonus(name) {
        let candidate = this.jobCandidates.find(a => a.name == name);
        if (candidate) {
            if (candidate.education == 'Bachelor') {
                return `${name} will sign a contract for ${this.employer}, as ${this.position} with a salary of $50,000 per year!`
            } else if (candidate.education == 'Master') {
                return `${name} will sign a contract for ${this.employer}, as ${this.position} with a salary of $60,000 per year!`
            } else if (candidate.education != 'Master' || candidate.education != 'Bachelor') {
                return `${name} will sign a contract for ${this.employer}, as ${this.position} with a salary of $40,000 per year!`
            }
        } else {
            throw new Error(`${name} is not in the candidates list!`)
        }
    }

    candidatesDatabase() {
        if (this.jobCandidates.length === 0) {
            throw new Error("Candidate Database is empty!");
        }

        const sortedCandidates = this.jobCandidates.sort((a, b) => a.name.localeCompare(b.name));
        const candidateInfo = sortedCandidates.map(candidate => `${candidate.name}-${candidate.yearsExperience}`).join('\n');

        return `Candidates list:\n${candidateInfo}`;
    }
}

let Jobs = new JobOffers("Google", "Strategy Analyst");
console.log(Jobs.jobApplication(["John Doe-Bachelor-10", "Peter Parker-Master-5", "Daniel Jones- Bachelor-18"]));
console.log(Jobs.jobOffer("John Doe-8"));
console.log(Jobs.jobOffer("Peter Parker-4"));
console.log(Jobs.salaryBonus("John Doe"));
console.log(Jobs.salaryBonus("Peter Parker"));

