import * as React from 'react';
import { useState } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import Link from 'next/link';
import categories from '../../constants/categories';
import { getChildrenCategories } from '../../constants/categories';

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from '@/components/ui/navigation-menu';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import { setSelectedCategory } from '@/redux/features/categoryId-slice';
import { useDispatch } from 'react-redux';
import { useAppDispatch } from '@/redux/store';

// Define ListItem component properly
const ListItem = React.forwardRef<
  HTMLAnchorElement,
  React.ComponentPropsWithRef<'a'> & { title: string }
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            'group flex select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-blue-light-4 hover:text-gray-7 focus:bg-accent focus:text-accent-foreground',
            className,
          )}
          {...props}>
          {/* <ArrowRight
            className="mr-3 transition-transform duration-300 group-hover:translate-x-1"
            color="#2270ec"
          /> */}
          <div>
            <div className="text-l font-medium leading-none">{title}</div>
            {/* <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">{children}</p> */}
          </div>
        </a>
      </NavigationMenuLink>
    </li>
  );
});

// Add display name for the component
ListItem.displayName = 'ListItem';

const Navigation = ({}) => {
  const [dropdownToggler, setDropdownToggler] = useState(false);
  const pathUrl = usePathname();
  const [nav, setNav] = useState(categories);
  const router = useRouter();
  const dispatch = useDispatch();
  // console.log(nav);

  const onClickHandler = (id: string, path: string) => {
    dispatch(setSelectedCategory(id));
    router.push(`/category/${path}`);
  };

  return (
    <NavigationMenu>
      <NavigationMenuList>
        {nav.map((item, index) => (
          <NavigationMenuItem key={index}>
            <NavigationMenuTrigger
              onClick={(e) => {
                e.preventDefault();
                onClickHandler(item._id, item.__path);
              }}>
              {item.__text}
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid gap-3 p-6 md:w-[600px] lg:w-[800px] xl:w-[1000px] grid-cols-3 lg:grid-cols-4">
                {item.children &&
                  item.children.map(
                    (
                      child: { _id: string; __text: string; _parentId: string; __path?: string },
                      childIndex: number,
                    ) => (
                      <ListItem
                        key={childIndex}
                        href={`/category/${child.__path}`}
                        title={child.__text}>
                        {child.__text}
                      </ListItem>
                    ),
                  )}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default Navigation;
