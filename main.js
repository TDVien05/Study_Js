// Tại 1 thời điểm thì hàm alert chỉ hiện lên 1 lần mà thôi. Trong ví dụ bên dưới thì nó sẽ alert fullName trước --> bấm ok --> tắt alert fullName sau đó sẽ alert age.

// Khi có dấu ';' thì có thể code theo kiểu như này var age = 26; var fullName = 'Truong Doan Vien' --> khi không có dấu ';' thì không thể thực hiện được.

// var fullName = 'Truong Doan Vien'
// alert(fullName)
// var age = 26
// alert(age)

// Một số class built in của Javascript
// 1. console --> Dùng để in ra trong phần console của inspect (có thể dùng để debug)
// console.log('Day là 1 dong log')
// var fullName = 'Doan Vien'
// console.log(fullName)
// console.warn('Đây là warning!!!')
// console.error('Đây là error!!!')

// 2. confirm(message)
// confirm('Xác nhận bạn đủ 18 tuổi!!!')

// 3. prompt
// prompt('Đây là prompt!!!')

// 4. setTimeOut: tham số thứ nhất là 1 function, tham số thứ 2 là milisecond --> cho 1 đoạn code được chạy, sau 1 khoảng thời gian  
// Tức là khi chạy code lần đầu, sau 1 khoảng thời gian thì function đó sẽ được chạy !!! Lưu ý: code chỉ chạy được 1 lần chứ không phải như cron jobs
// setTimeout(function() {
//     alert('Test thử setTimeOut')
// }, 1000)

//5. setInterval: như cron jobs
// setInterval(function() {
//     alert('Đây là log: ' + Math.random)
// }, 2000)

// ======================
// Toán tử trong JavaSCript

// 1. Toán tử số học - Arithmetic
/**
 * Cộng 
 * Trừ 
 * Nhân 
 * Chia
 * Chia lấy dư
 * Tăng 1 giá trị
 * Giảm 1 giá trị
 * Cộng trừ nhân chia như Java (không có gì đáng nói)
 * LƯU Ý: Lũy thừa dùng dấu '**' --> Ví dụ: 2 ** 2: 2 lũy thừa 2 = 4
 * a++ và a-- thì dùng như bình thường
*/

// 2. Toán tử gán - Assignment
/**
 * Có các toán tử: 
 * =
 * +=
 * -=
 * *=
 * /=
 * **=
 * ==> Dùng như thông thường
 */

// TOÁN TỬ CHUỖI
/**
 * var firstName = 'Vien'
 * var lastName = 'Doan '
 * lastName += 'Truong'
 * console.log(firstName + ' ' + lastName)
 */

// 3. Toán tử so sánh - Comparison
/**
 * == 
 * != 
 * >
 * <
 * >=
 * <=
 * ==> Như bên Java
 */
// 4. Toán tử logic - Logical
/**
 * &&
 * ||
 * !
 * ==> Như bên java
 */

// ======================================
// CÁC KIỂU DỮ LIỆU TRONG JAVASCRIPT
// 1. Dữ liệu nguyên thủy - Primitive data type
/**
 * ---------SUMMARY---------
 * Number --> A number representing a mathematical value
 * Boolean --> A data type representing true or false
 * String --> A text of characters enclosed in quotes
 * Undefined --> A primitive variable with no assigned value 
 * Null --> A primitive value representing object absence
 * Symbol --> A unique and primitive identifier 
 */
/**
 * ---------TYPEOF---------
 * The 'typeof' operator --> to find the type of a JavaScript variable
 * The 'typeof' operator returns the type of a variable or an expression
 * Example: 
 *  + typeof "" --> returns "string"
 *  + typeof "John" --> returns "string"
 *  + typeof 0 --> returns "number"
 *  + typeof 3.14 --> returns "number"
 *  + typeof(3 + 4) --> returns "number"
 */
/**
 * ---------STRING---------
 * String có thể biểu thị dưới 2 dạng dấu: '', ""
 * Ví dụ: 'Đoàn Viên' và "Đoàn Viên" --> đều là kiểu dữ liệu dạng string (chuỗi)
 * 'Đoàn \'Viên' --> Output: Đoàn 'Viên
 * "Đoàn 'Viên" --> Output: Đoàn 'Viên
 * Tương tự với các trường hợp ngược lại 
 * Có 2 loại string trong JavaScript:
 *  + Primite: let name = "Doan Vien";
 *  + Object: let x = new String("Doan Vien");
 * Thông thường không hay dùng String object vì nhiều nguyên do như: tốn bộ nhớ, exception, ...
 */
/**
 * ---------NUMBERS---------
 * LƯU Ý: Tất cả kiểu dữ liệu số trong JavaScript đều được lưu trữ dưới dạng các số thập phân. Ví dụ: 3, 5, 10, 3.14
 */
/**
 * ---------UNDEFINED---------
 * Variables có thể được khai báo khi không có giá trị cụ thể. Ví dụ: let carName. Và các giá trị này có thể được tính toán hoặc được bổ sung sau như user input.
 * 1 variable không có giá trị sẽ có kiểu dữ liệu là 'undefined'
 * 1 variable không có giá trị thì giá trị đó sẽ là 'undefined'
 */
/**
 * ---------EMPTY VALUE---------
 * let car = ""
 * LƯU Ý: giá trị rỗng sẽ không liên quan gì tới giá trị 'undefined'
 * + Undefined có nghĩa là:
 *      > Biến được khai báo nhưng chưa có giá trị.
 *      > JavaScript tự sinh ra 'undefined' truong những trường hợp nhất định
 *      > Ví dụ: let a; 
 *               console.log(a); // undefined
 * + Empty value là chính giá trị mà dev gán, và được xem là rỗng theo logic
 *      > Ví dụ: let a = "";
 *               console.log(a) // "" (empty string)
 * ==> Kết luận: 'empty' là giá trị tồn tại thật, còn 'undefined'là không có giá trị 
 * + Empty string vẫn là 1 giá trị hợp lệ trong JavaScript và nó có kiểu dữ liệu là string
 */
/**
 * ---------SYMBOL---------
 * Định nghĩa: Symbol là 1 kiểu dữ liệu primitive được giới thiệu từ JavaScript phiên bản ES6
 * Symbol được dùng để tạo ra 1 giá trị duy nhất và không trùng lặp, dù cho dev có tạo ra nhiều symbol có cùng mô tả.
 * let a = Symbol('description');
 * 1. Tính unique của Symbol
 * - Dù có cùng description nhưng các biến có kiểu Symbol đều khác nhau.
 * Ví dụ: 
 *  const a = Symbol('id')
 *  const b = Symbol('id')
 *  a === b ==> false
 * 2. Symbol không thể chuyển qua string tự động
 * - Symbol không thể chuyển qua string vì lí do bảo mật.
 * - const s = Symbol('test');
 * console.log("symbol" + s) --> error
 * 3. Thường dùng để tạo key riêng cho object
 * 4. CÒN RẤT NHIỀU ĐIỀU THÚ VỊ. HOME WORK --> Tìm hiểu về Symbol 
 */

// 2. Dữ liệu phức tạp -- Complex data
// 2.1. Function
// 2.2. Object

const test = new WeakSet([{fName: 'Vien', age: 18}, 15]);

console.log(test);