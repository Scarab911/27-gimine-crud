class Gimine {
    constructor() {
        this.list = [];
    }
    gime(item) {
        if (!this.isValidItem(item)) {
            console.error('ERROR: blogai pateikta informacija!');
            return false;
        }
        this.list.push(item);

    };
    giminesMedis() {
        console.log('Bajorai gimines medis:');
        console.log('======================');
        for (let i = 0; i < this.list.length; i++) {
            const element = this.list[i];
            let padetis = element.married ? element.sex === 'vyras' ? 'vedes' : 'istekejus' : 'nevedes';
            // if (element.married === true && element.sex === 'vyras') {
            //     padetis = 'vedes';
            // }
            // if (element.married === true && element.sex === 'moteris') {
            //     padetis = 'istekejusi';
            // }
            // if (element.married === false && element.sex === 'vyras') {
            //     padetis = 'nevedes';
            // }
            // if (element.married === false && element.sex === 'moteris') {
            //     padetis = 'netekejusi';
            // }
            //trumpinam logica:
            // if (element.married === true && element.sex === 'vyras') {
            //     padetis = 'vedes';
            // } else {
            //     padetis = 'nevedes';
            // }
            // if (element.married === true && element.sex === 'moteris') {
            //     padetis = 'istekejusi';
            // } else {
            //     padetis = 'netekejusi';
            // }


            console.log(`${i + 1}. ${element.name} gime ${element.year} ir ${padetis}.`);
        }
        console.log('======================');
    }
    zmogausInformacija(index) {
        if (!this.isValidIndex(index)) {
            console.error('ERROR: neduotas indexas');
            return false
        }
        console.log('Zmogaus Informacija:');
        console.log('=====================');
        console.log(this.list[index]);
        console.log('=====================');
    };
    vestuves(index) {
        if (!this.isValidIndex(index)) {
            console.error('ERROR: neduotas indexas');
            return false
        }
        this.list[index].married = true;
        // console.log(this.list[index]);
    };
    mire(index) {
        if (!this.isValidIndex(index)) {
            console.error('ERROR: neduotas indexas');
            return false
        }
        const updatedList = [];
        for (let i = 0; i < this.list.length; i++) {
            const element = this.list[i];
            if (index !== i) {
                updatedList.push(this.list[i]);
            }
        }
        this.list = updatedList;
    };
    skyrybos(index) {
        if (!this.isValidIndex(index)) {
            console.error('ERROR: neduotas indexas');
            return false
        }
        this.list[index].married = false;
    };
    isValidIndex(index) {
        if (this.list.length <= index ||
            index < 0 ||
            index % 1 !== 0) {
            return false;
        }
        return true;
    }

    isValidItem(item) {
        if (typeof item !== 'object' ||
            typeof item.name !== 'string' ||
            item.name === '' ||
            typeof item.year !== 'number' ||
            item.year <= 0 ||
            typeof item.married !== 'boolean' ||
            typeof item.sex !== 'string' ||
            item.sex === ''
        ) {
            return false;
        }

        return true;
    }
}

module.exports = Gimine;