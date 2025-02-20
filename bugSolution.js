```javascript
import dynamic from 'next/dynamic';

const MyComponent = dynamic(() => import('./MyComponent'), { ssr: false });

function MyPage() {
  return (
    <div>
      <MyComponent />
    </div>
  );
}

export default MyPage;

//MyComponent.js
import Link from 'next/link';

function MyComponent() {
  return (
    <div>
      <Link href="/about">
        <a>About Us</a>
      </Link>
    </div>
  );
}

export default MyComponent;
```