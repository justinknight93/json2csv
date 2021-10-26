const testJson = {
    'titles':['name','age','city'],
    'data':[
        {'name': 'John', 'age': '25', 'city': 'New York'}, 
        {'name': 'Jane', 'age': '24', 'city': 'New York'}, 
        {'name': 'Joe', 'age': '26', 'city': 'New York'}]
    };

const testCsv = `name,age,city
John,25,New York
Jane,24,New York
Joe,26,New York`;

const json2csv = {
    convertToCsv: function(json) {
        let csv = '';
        if (json.titles.length > 0) {
            csv += json.titles.join(',') + '\n';
            if (json.data.length > 0) {
                for (let i = 0; i < json.data.length; i++) {
                    let row = [];
                    for (let j = 0; j < json.titles.length; j++) {
                        row.push(json.data[i][json.titles[j]]);
                    }
                    csv += row.join(',') + '\n';
                }
            }
        }else{
            throw `No titles found in object. This function expects an object formatted like this: 
            {'titles':['name','age','city'],
            'data':[
                {'name': 'John', 'age': '25', 'city': 'New York'}, 
                {'name': 'Jane', 'age': '24', 'city': 'New York'}, 
                {'name': 'Joe', 'age': '26', 'city': 'New York'}
            ]}
            'titles' is an array of the titles at the top of the resulting csv and 'data' is an array of the rows following the titles.`;
        }
        return csv;
    },
    
    convertToJson: function(csv) {
        let json = {};
        let lines = csv.split('\n');
        if (lines.length > 0) {
            let titles = lines[0].split(',');
            json.titles = titles;
            json.data = [];
            for (let i = 1; i < lines.length; i++) {
                let row = lines[i].split(',');
                let rowObj = {};
                for (let j = 0; j < titles.length; j++) {
                    rowObj[titles[j]] = row[j];
                }
                json.data.push(rowObj);
            }
        }else{
            throw `No lines found in csv. This function expects a string in csv format like this:
            "name,age,city
            John,25,New York
            Jane,24,New York
            Joe,26,New York"`;
        }
        return json;
    }
}