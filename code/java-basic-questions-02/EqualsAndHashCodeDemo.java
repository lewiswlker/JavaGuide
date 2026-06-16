import java.util.HashMap;
import java.util.HashSet;
import java.util.Map;
import java.util.Set;

/**
 * 演示：为什么重写 equals() 时必须重写 hashCode()？
 *
 * HashMap/HashSet 查找元素分两步：
 *   1. 先用 hashCode() 定位到桶（bucket）；
 *   2. 再在桶内用 equals() 逐个比较。
 * 如果 equals 相等的两个对象 hashCode 不相等，第 1 步就会落到不同的桶，
 * equals 根本没有机会被调用，于是出现"逻辑上相等的对象却被当成两个"的问题。
 */
public class EqualsAndHashCodeDemo {

    public static void main(String[] args) {
        demoOnlyEquals();
        System.out.println("--------------------------------------------------");
        demoBothOverridden();
    }

    /** 反例：只重写 equals()，HashSet 去重失效、HashMap 取不到值 */
    private static void demoOnlyEquals() {
        System.out.println("【反例】只重写 equals()，未重写 hashCode()：");

        PersonOnlyEquals p1 = new PersonOnlyEquals("张三", 25);
        PersonOnlyEquals p2 = new PersonOnlyEquals("张三", 25);

        System.out.println("p1.equals(p2)            = " + p1.equals(p2));   // true
        System.out.println("p1.hashCode()            = " + p1.hashCode());
        System.out.println("p2.hashCode()            = " + p2.hashCode());   // 与 p1 不同

        Set<PersonOnlyEquals> set = new HashSet<>();
        set.add(p1);
        set.add(p2);
        System.out.println("HashSet 去重后 size      = " + set.size() + "（期望 1，实际 2，去重失效）");

        Map<PersonOnlyEquals, String> map = new HashMap<>();
        map.put(p1, "工程师");
        // 用一个 equals 相等的"新对象"做 key 去取值——这是 HashMap 的典型用法
        System.out.println("map.get(p2)              = " + map.get(p2) + "（期望 工程师，实际 null）");
        System.out.println("map.containsKey(p2)      = " + map.containsKey(p2) + "（期望 true）");
    }

    /** 正例：equals() 和 hashCode() 都重写，行为符合预期 */
    private static void demoBothOverridden() {
        System.out.println("【正例】equals() 和 hashCode() 都重写：");

        Person p1 = new Person("张三", 25);
        Person p2 = new Person("张三", 25);

        System.out.println("p1.equals(p2)            = " + p1.equals(p2));   // true
        System.out.println("p1.hashCode()            = " + p1.hashCode());
        System.out.println("p2.hashCode()            = " + p2.hashCode());   // 与 p1 相同

        Set<Person> set = new HashSet<>();
        set.add(p1);
        set.add(p2);
        System.out.println("HashSet 去重后 size      = " + set.size() + "（正确去重）");

        Map<Person, String> map = new HashMap<>();
        map.put(p1, "工程师");
        System.out.println("map.get(p2)              = " + map.get(p2));
        System.out.println("map.containsKey(p2)      = " + map.containsKey(p2));
    }
}
