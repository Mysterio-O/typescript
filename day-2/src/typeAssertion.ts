let anything: any;

anything = 123;
(anything as number).toFixed();

const kgToGmConverter = (input: string | number) => {
    let returnValue;
    if (typeof input === 'number') {
        returnValue = input * 1000;
    } else if (typeof input === 'string') {
        const converted = Number(input.split('')[0]);
        console.log('converted->', converted);
        if (typeof converted === 'number' && !isNaN(converted)) {
            returnValue = converted * 1000
        }
    }
    return returnValue ? returnValue as number : undefined;
}

console.log(kgToGmConverter('2kg & 3kg'))