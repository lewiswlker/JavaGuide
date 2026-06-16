/**
 * 演示：字符串常量池 + 编译期常量折叠。
 *
 * == 比较的是引用（两个变量是否指向同一个对象），而不是内容。
 * 三个结果的本质区别在于：字符串是在【编译期】进入常量池，还是在【运行期】于堆上新建。
 *
 *   str3 = "str" + "ing"  两个操作数都是字面量（编译期常量），javac 直接折叠成 "string"，
 *                          和 str5 一样从常量池拿同一个对象        → str3 == str5 为 true
 *   str4 = str1 + str2    操作数是普通变量，编译期无法确定值，
 *                          运行期拼接出一个新的堆对象（不进常量池） → str4 == str3/str5 为 false
 */
public class StringPoolDemo {

    public static void main(String[] args) {
        String str1 = "str";
        String str2 = "ing";
        String str3 = "str" + "ing";
        String str4 = str1 + str2;
        String str5 = "string";

        System.out.println("str3 == str4 : " + (str3 == str4)); // false
        System.out.println("str3 == str5 : " + (str3 == str5)); // true
        System.out.println("str4 == str5 : " + (str4 == str5)); // false

        System.out.println("----------------------------------------");

        // 验证一：final 变量是编译期常量，拼接同样会被折叠 → 结果变成 true
        final String f1 = "str";
        final String f2 = "ing";
        String str6 = f1 + f2;
        System.out.println("final 变量拼接 str6 == str5 : " + (str6 == str5)); // true

        // 验证二：intern() 把运行期拼接的字符串"送回"常量池，返回池中引用 → true
        System.out.println("str4.intern() == str5      : " + (str4.intern() == str5)); // true

        // 验证三：内容其实一直相等，比较内容应该用 equals()
        System.out.println("str4.equals(str5)          : " + str4.equals(str5)); // true
    }
}

