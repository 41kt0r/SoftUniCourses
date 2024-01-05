class ArtGallery {
    constructor(creator) {
        this.creator = creator;
        this.possibleArticles = { picture: 200, photo: 50, item: 250 };
        this.listOfArticles = [];
        this.guests = [];
    }

    addArticle(articleModel, articleName, quantity) {
        articleModel = articleModel.toLowerCase();

        if (!this.possibleArticles[articleModel]) {
            throw new Error("This article model is not included in this gallery!");
        }

        let isInTheArray = false;
        for (const el of this.listOfArticles) {
            if (el.articleName === articleName && el.articleModel === articleModel) {
                el.quantity += Number(quantity);
                isInTheArray = true;
                break;
            }
        }

        if (!isInTheArray) {
            this.listOfArticles.push({ articleModel, articleName, quantity });
        }

        return `Successfully added article ${articleName} with a new quantity- ${quantity}.`;
    }

    inviteGuest(guestName, personality) {
        for (const guest of this.guests) {
            if (guest.guestName === guestName) {
                throw new Error(`${guestName} has already been invited.`);
            }
        }

        let obj = {
            guestName,
            points: 0,
            purchaseArticle: 0
        };

        switch (personality) {
            case 'Vip':
                obj.points = 500;
                break;
            case 'Middle':
                obj.points = 250;
                break;
            default:
                obj.points = 50;
                break;
        }

        this.guests.push(obj);
        return `You have successfully invited ${guestName}!`;
    }

    buyArticle(articleModel, articleName, guestName) {
        let article;
        let guest;

        let isArticleInTheArray = false;

        for (let el of this.listOfArticles) {
            if (el.articleName === articleName && el.articleModel === articleModel) {
                isArticleInTheArray = true;
                article = el;
                break;
            }
        }

        if (!isArticleInTheArray) {
            throw new Error("This article is not found.");
        }

        if (article.quantity === 0) {
            return `The ${articleName} is not available.`;
        }

        let isGuestInTheArray = false;

        for (const el of this.guests) {
            if (el.guestName === guestName) {
                isGuestInTheArray = true;
                guest = el;
                break;
            }
        }

        if (!isGuestInTheArray) {
            return "This guest is not invited.";
        }

        if (guest.points < this.possibleArticles[articleModel]) {
            return "You need more points to purchase the article.";
        } else {
            article.quantity--;
            guest.points -= this.possibleArticles[articleModel];
            guest.purchaseArticle++;
        }

        return `${guestName} successfully purchased the article worth ${this.possibleArticles[articleModel]} points.`;
    }

    showGalleryInfo(criteria) {
        let result = '';
    
        if (criteria === "article") {
            result += "Articles information:\n";
            for (const article of this.listOfArticles) {
                result += `${article.articleModel} - ${article.articleName} - ${article.quantity}\n`;
            }
        } else if (criteria === "guest") {
            result += "Guests information:\n";
            for (const guest of this.guests) {
                result += `${guest.guestName} - ${guest.purchaseArticle}\n`;
            }
        } else {
            result += "Invalid criteria. Please use 'article' or 'guest'.";
        }
    
        return result;
    }
}
