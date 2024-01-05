class RefurbishedSmartphones {
    constructor(retailer) {
        this.retailer = retailer;
        this.availableSmartphones = [];
        this.soldSmartphones = [];
        this.revenue = 0;
    }

    addSmartphone(model, storage, price, condition) {
        if (
            typeof model !== 'string' ||
            model === '' ||
            typeof storage !== 'number' ||
            storage <= 0 ||
            typeof price !== 'number' ||
            price <= 0 ||
            typeof condition !== 'string' ||
            condition === ''
        ) {
            throw new Error('Invalid smartphone!');
        }

        const roundedPrice = price.toFixed(2);
        this.availableSmartphones.push({ model, storage, price: Number(roundedPrice), condition });

        return `New smartphone added: ${model} / ${storage} GB / ${condition} condition - ${roundedPrice}$`;
    }

    sellSmartphone(model, desiredStorage) {
        const foundSmartphoneIndex = this.availableSmartphones.findIndex((phone) => phone.model === model);
    
        if (foundSmartphoneIndex === -1) {
            throw new Error(`${model} was not found!`);
        }
    
        const foundSmartphone = this.availableSmartphones[foundSmartphoneIndex];
        let soldPrice = foundSmartphone.price;
    
        if (foundSmartphone.storage !== desiredStorage) {
            const storageDifference = foundSmartphone.storage - desiredStorage;
            if (storageDifference <= 128) {
                // Намаление от 10% при разлика до 128 GB
                soldPrice *= 0.9;
            } else {
                // Намаление от 20% при разлика над 128 GB
                soldPrice *= 0.8;
            }
        }
    
        this.availableSmartphones.splice(foundSmartphoneIndex, 1);
        this.soldSmartphones.push({ model, storage: foundSmartphone.storage, soldPrice });
    
        // Закръгляне на цената до втората десетична цифра
        soldPrice = soldPrice.toFixed(2);
    
        // Увеличаване на приходите
        this.revenue += Number(soldPrice);
    
        return `${model} was sold for ${soldPrice}$`;
    }
    

    upgradePhones() {
        if (this.availableSmartphones.length === 0) {
            throw new Error('There are no available smartphones!');
        }

        const upgradedPhones = this.availableSmartphones.map((phone) => {
            phone.storage *= 2;
            return `${phone.model} / ${phone.storage} GB / ${phone.condition} condition / ${phone.price.toFixed(2)}$`;
        });

        return `Upgraded Smartphones:\n${upgradedPhones.join('\n')}`;
    }

    salesJournal(criteria) {
        if (criteria !== 'storage' && criteria !== 'model') {
            throw new Error('Invalid criteria!');
        }

        const sortedSoldSmartphones = [...this.soldSmartphones].sort((a, b) => {
            if (criteria === 'storage') {
                return b.storage - a.storage;
            } else if (criteria === 'model') {
                return a.model.localeCompare(b.model);
            }
        });

        const totalIncome = this.revenue.toFixed(2);
        const soldSmartphonesCount = sortedSoldSmartphones.length;

        const result = `${this.retailer} has a total income of ${totalIncome}$\n${soldSmartphonesCount} smartphones sold:\n`;

        const soldSmartphonesInfo = sortedSoldSmartphones
            .map((phone) => `${phone.model} / ${phone.storage} GB / ${phone.soldPrice.toFixed(2)}$`)
            .join('\n');

        return result + soldSmartphonesInfo;
    }
}

let retailer = new RefurbishedSmartphones('SecondLife Devices');
retailer.addSmartphone('Samsung S20 Ultra', 256, 1000, 'good');
retailer.addSmartphone('Iphone 12 mini', 128, 800, 'perfect');
retailer.addSmartphone('Xiaomi Redmi Note 10 Pro', 128, 330, 'perfect');
console.log(retailer.sellSmartphone('Samsung S20 Ultra', 256));
console.log(retailer.sellSmartphone('Xiaomi Redmi Note 10 Pro', 256));
console.log(retailer.sellSmartphone('Samsung Galaxy A13', 64));


