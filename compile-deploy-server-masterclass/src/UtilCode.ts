export default class UtilCode {

    public static getRandomString(length: number) {
        let randomChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
        let result = '';
        for (let i = 0; i < length; i++) {
            result += randomChars.charAt(Math.floor(Math.random() * randomChars.length));
        }
        return result;
    }

    public static getRandomNumber(length: number) {
        let randomChars = '0123456789';
        let result = '';
        for (let i = 0; i < length; i++) {
            result += randomChars.charAt(Math.floor(Math.random() * randomChars.length));
        }
        return result;
    }

    public static generarArrayAleatorio(): number[] {
        const numeros = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
        const arrayAleatorio: number[] = [];
      
        while (numeros.length > 0) {
          const indiceAleatorio = Math.floor(Math.random() * numeros.length);
          const numeroAleatorio = numeros.splice(indiceAleatorio, 1)[0];
          arrayAleatorio.push(numeroAleatorio);
        }
      
        return arrayAleatorio;
    }
    
    public static async getPosition(array: number[], mValue: number): Promise<number> {
        let mIndex = -1
        await array.forEach((value, index) => {
            if (value == mValue) {
                mIndex = index
            }
        })
        return mIndex
    }
    
}