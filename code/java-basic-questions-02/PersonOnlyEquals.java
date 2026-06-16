import java.util.Objects;

/**
 * 反例：只重写了 equals()，没有重写 hashCode()。
 * hashCode() 沿用 Object 的默认实现（基于对象内存地址生成），
 * 导致 equals 相等的两个对象 hashCode 几乎必然不相等，违反了 hashCode 的通用约定。
 */
public class PersonOnlyEquals {
    private final String name;
    private final int age;

    public PersonOnlyEquals(String name, int age) {
        this.name = name;
        this.age = age;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (!(o instanceof PersonOnlyEquals)) {
            return false;
        }
        PersonOnlyEquals that = (PersonOnlyEquals) o;
        return age == that.age && Objects.equals(name, that.name);
    }

    // 注意：这里故意没有重写 hashCode()
}
