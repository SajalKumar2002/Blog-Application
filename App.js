import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import {
  BlogProvider
} from './src/context/BlogContext';

import BlogList from './src/screens/BlogList';
import BlogListDetail from './src/screens/BlogListDetail';
import CreateBlogList from './src/screens/CreateBlogList';
import EditBlogList from './src/screens/EditBlogList';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <BlogProvider>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerTitle: 'Blog App' }} >
          <Stack.Screen name="Home" component={BlogList} />
          <Stack.Screen name="Edit" component={EditBlogList} />
          <Stack.Screen name="Create" component={CreateBlogList} />
          <Stack.Screen name="Detail" component={BlogListDetail} />
        </Stack.Navigator>
      </NavigationContainer>
    </BlogProvider>
  );
}
