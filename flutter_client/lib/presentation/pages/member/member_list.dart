import 'package:flutter/material.dart';
import 'package:flutter_client/presentation/widgets/navigation_bar.dart'
    as MyNavigationBar;

class MemberList extends StatefulWidget {
  const MemberList({Key? key}) : super(key: key);

  @override
  _MatchPageState createState() => _MatchPageState();
}

class _MatchPageState extends State<MemberList> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('Member List'),
      ),
      body: const Center(
        child: Text('This is the Member List Page!'),
      ),
      bottomNavigationBar: const MyNavigationBar.NavigationBar(
        destinations: [
          BottomNavigationBarItem(
            icon: Icon(Icons.home),
            label: 'Home',
          ),
          BottomNavigationBarItem(
            icon: Icon(Icons.group),
            label: 'Match',
          ),
          BottomNavigationBarItem(
            icon: Icon(Icons.settings),
            label: 'Settings',
          ),
        ],
      ),
    );
  }
}
