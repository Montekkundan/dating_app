import 'package:flutter/material.dart';

import 'presentation/routes.dart';

void main() {
  runApp(MyApp());
}

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Your App Title',
      theme: ThemeData(
        primarySwatch: Colors.blue,
      ),
      initialRoute: Routes.home,
      onGenerateRoute: Routes.generateRoute,
    );
  }
}
